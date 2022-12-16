import { ref ,unref,isRef,watchEffect} from "vue";
export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  function doFetch(){
    console.log('doFetch',url)
    // 在请求前重置状态...
    data.value=null
    error.value=null

    fetch(unref(url))
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));
  }

  if(isRef(url)){
    // 若输入的url是一个ref，那么启动一个响应式的请求
    watchEffect(doFetch)
  }else{
    // 只请求一次
    doFetch()
  }

 

  return { data, error ,retry:doFetch};
}

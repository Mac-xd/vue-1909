
<template>

  <div class="home">
   欢迎来到我的世界！！！
           <p>这是一个P便签</p>
           <p>这是一个P标签</p>
           <div>{{masg}}:{{arr}}</div>
           <div class="box">这个一个div</div>
           <ul class = "list">
           <li>{{sex}}</li>
           <li>{{age}}</li>
           <li>{{hobu}}</li>
           </ul>
           <template>
          <div>你在干什么</div>
          <div>我在睡觉</div>
          <div>{{getData()}}</div>
      </template>
  </div>
     
</template>
 <script>


export default {
  // 当前组件的名字
  name: 'Home',
   data(){
     return {
       masg:'森林',
       arr:[2,3,4,5,6],
       sex:'男',
       age:20,
       hobu:'打羽毛球'

     }
     
   },
   methods:{
        getData(){
            //alert('哈哈哈555555！');
        }
        
    },
    // beforeMount(){
    //     console.log(document.getElementsByClassName('list')[0],'000')
    // },
    // mounted(){
    //     console.log(document.getElementsByClassName('list')[0],'111')
    // }
   
}
 </script>
  
 <style>
   .box{
     width:200px;
     height:200px;
     background:red;
   }
   .list{
     list-style:none;
     width:100px;
     height:100px;
     background:green;
     margin-left:150px;
     border-radius:70%;

   }
 </style>

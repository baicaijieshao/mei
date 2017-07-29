<template>
	<div class="bus">
		<!--核心业务系统标签-->
		<div class="bus-lable">{{ bussiness[0] }}</div>
		<div class="bus-content">
			<div class="bus-line">
				<!--供应商链虚线-->
				<div class="bus-line1"></div>
				<!--工厂虚线-->
				<div class="bus-line2"></div>
			</div>
			<div class="bus-supply">
				<div class="bus-supply-lable bus-subLable">{{ bussiness[1] }}</div>
				<div class="bus-subContent">
					<table width="100%" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<th v-for="supply in supplys">
									{{ supply.lable }}
								</th>
							</tr>
							<tr>
								<td v-for="supply in supplys">
									<a :href="supply.url" target="_blank">
										<img :src="supply.img" alt="" />
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="bus-factory">
				<div class="bus-factory-lable bus-subLable">{{ bussiness[2] }}</div>
				<div class="bus-subContent">
					<table width="100%" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<th v-for="lable in factorys">
									{{ lable.lable }}
								</th>
							</tr>
							<tr>
								<td v-for="img in factorys">
									<a :href="img.url" >
										<img :src="img.img"/>
									</a>
								</td>
							</tr>
						</tbody>
					</table>					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bussiness :[
					( '核心业务系统' ),( '供应链协同管理' ),( '智能工厂' )
				],
				supplys:[
					{ 
						lable : '客户管理CRM' ,
						img : require('./CRM.png'),
						url : 'http://crm.safety-inxs.com:8072/login/login.php'
					},
					{ 
						lable : '供应链管理SCM ',
						img : require('./U8.jpg'),
						url : "http://safetyinxs.ufyct.com:8888/"
					},
					{ 
						lable : '生产管理' ,
						img : require('./K3.png'),
						url : "http://safety-inxs.ik3cloud.com/K3cloud"
					},
					{ 
						lable : '物流管理' ,
						img : require('./building.png')	,
						url : "javascript:alert('建设中，敬请期待！');"
					},
					{ lable : '' }
				],
				factorys:[
					{ 
						lable : '智能门禁' ,
						img : require('./building.png'),
						url : "javascript:alert('建设中，敬请期待！');"
					},
					{ 
						lable : '智能监控' ,
						img : require('./building.png'),
						url : ""
					},
					{ lable : '' }
				]
			}
		},
		methods:{
			buildingMsg() {
				alert('建设中，敬请期待！');
			}
		}		
	}
</script>

<style>
	.bus{
		margin-top: 10px;
		font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
		color: black;
		text-align: center;
		
	}
	.bus-lable{
		width: 136px;
		font-size: 14px;
	}
	.bus-lable,.bus-subLable{
		height: 27px;
		line-height: 27px;
		background: rgba(240,245,243,.6);
		border: 1px solid #c8c8c8;
		border-bottom: none;
		border-radius: 5px 5px 0 0;		
	}		
	.bus-content{
		width: 958px;
		float: left;
		font-size: 12px;
		border: 1px solid #d2d4d4;	
		background: linear-gradient(to bottom, #fff 0%, #f0f5f3 100%);	
	}
	.bus-line{
		float: left;
		width: 22px;
		height: 184px;
		margin-left: 22px;
		border-left: 1px dashed #c2c5c5;
		border-bottom: 1px dashed #c2cc5c;
	}
	.bus-line1{
		width: 100%;
		height: 28px;
		border-bottom: 1px dashed #c2c5c5;
	}
	.bus-supply,.bus-factory{
		float: left;
		width: 900px;
		margin-top: 15px;
	}
	.bus-subLable{
		float: left;
		width: 129px;
		font-size: 13px;
	}
	.bus-subContent{
		width: 870px;
		height: 100px;
		border: 1px solid #c8c8c8;
		float: left;
	}
	.bus-factory{
		margin-bottom: 20px;
	}
	.bus-subContent th{
		line-height: 24px;
		background: rgb(237,239,255);
		border-bottom: 1px solid #c8c8c8;
	}
	.bus-subContent th:not(:last-of-type){
		width: 145px;
		height: 24px;
		border-right: 1px solid #ccc;
	}
	.bus-subContent td a{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 75px;
		width: 100%;
	}
	.bus-subContent td a img{
		border-radius: 10px;
	}
</style>
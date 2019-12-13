import React, { Component } from 'react';
import { Container, Header, Content, Card, Button, CardItem, Form, Icon, Text, Item, Right, Input, Accordion, ListItem, CheckBox, Body, Label } from 'native-base';
import { View, Image, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker'; 
import FormData from 'FormData';
// import * as firebase from 'firebase';
// import {config,settings} from '../../Config/Firebase'
// import 'firebase/firestore';
// import "firebase/storage"
// import ImgToBase64 from 'react-native-image-base64';

// firebase.initializeApp(config);
// const db = firebase.firestore();
// firestore.settings(settings);
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


const dataArray = [
  { title: "Part Conditions", content: "Lorem ipsum dolor sit amet" },
];
const array1 = [
  { title: "Shop Category", content: "Lorem ipsum dolor sit amet" },
  // { title: "Shop Brands", content: "Lorem ipsum dolor sit amet" },
  // { title: "Jeep Model", content: "Lorem ipsum dolor sit amet" },
];

const Company = [
  { title: "Company", content: "Lorem ipsum dolor sit amet" },
];
 
const making_year = [
  { title: "Making Year", content: "Lorem ipsum dolor sit amet" },
];

const jeep_models = [
  { title: "Jeeps Model", content: "Lorem ipsum dolor sit amet" },
];

const array3 = [
  {

    title: "Initial Vehicle Intake", content: "Lorem ipsum dolor sit amet"
  },

];
const Dimension = [
  { title: "DIMENSIONS" },
];



export default class CardListExample extends Component {
  constructor(props) {
    super(props)

    this.state = {

    img_path:[],
    // file:false,
      something: [],
      selectedIndexes: [],

      // shop brands

    
      smethng:[],
      slctdindx:[],

      // jeep models

      smth:[],
      slin:[],

      // making years

      sm:[],
      sl:[],

      // initial vehicle intake 

       name : '',
       description:'',
       short_description:'',
       price:'',
       regular_price:'',
       sale_price:'',
       sku:'',
       date_on_sale_from:'',
       date_on_sale_to:'',
       stock_quantity:'',
       weight:'',
       categories:[{
        "name":"saad",
        "id":19,
        // "CGPA":2.8
      }],
       tags:'',
       attributes:'',
       uriMud : ''
    };

    this._rendersomething = this._rendersomething.bind(this);
    // this.uploadImageAsync= this.uploadImageAsync.bind(this);
  }



   initial_vehicle_intake=()=>{
     const self=this;
const  {name, uriMud} =this.state;
console.log('name name', name, uriMud)
const khalid = new FormData()
          var file = {
            uri: uriMud,
            name: name,
            type: 'image/png'
          }
           khalid.append('image',file)
            khalid.append('upload','upload')
            console.log("khalid khalid khalid", khalid)

 fetch("https://mobileappstore.co.uk/khalid/rest_api.php", {
            method: 'POST',
            // dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: khalid
        }).then(res => res.json())
            .then(resp => { this.setState({img: resp.source_url},()=>{   
               const Data =  new FormData()
              //  var data = {
              //   "name": "Quality",
              //   "type": "simple",
              //   "regular_price": "21.99",
              //   "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
              //   "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
              //   "categories": [
              //     {
              //       "id": 9
              //     },
              //     {
              //       "id": 14
              //     }
              //   ],
              //   "images": [
              //     {
              //       "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
              //     },
              //     {
              //       "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
              //     }
              //   ]
              // }
              Data.append("name",this.state.name)
              Data.append("regular_price", "21.99")
              Data.append("descrpition",this.state.description)
              Data.append("short_descrpition",this.state.short_description)
              Data.append("type","simple")
              Data.append("categories", [
                {
                  "id": 19
                },
                {
                  "id": 20
                }
              ],)
              
              Data.append("images",[
                {
                  "src":this.state.img
                }
              ])
            console.log('obj **********Data', JSON.stringify(Data))
            console.log(this.state.img,"88888888888888888888888888888888888uddwweez")
            fetch('http://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/products',{
              method:'POST',
               dataType: "json",
              headers: {
                'Accept': 'application/json',
                "content-type" :"multipart/form-data"
              },
              body: JSON.stringify(Data),
            }).then(response => response.json())
            .then(result => console.warn("*****finalresult******",result))
            .catch(error => console.error('ERROR',error))
          
          })
                // console.log("KHALID KHALID", resp.source_url)
                // var successData = resp

            })
            .catch(err => {
                console.log("err UPDATEPROFILE KhALID BHAI", err)});



// next___________________________________________________________
  

    

//  const url = 'http://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/products'

// alert("check")


   



 
 
  }

 

  uploadImageAsync = async (uri) => {
    const { image, username, email, userId } = this.state
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            // console.log(e);
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

    var uriARR = blob.data.name
      console.log('***************blob',blob._data.name,blob, uri)
      this.setState({name: blob._data.name, uriMud: uri})

    // this.setState({
    //     imgName: uriARR
    // });

    // if (uriARR != "") {

        // let ENDPOINT = "https://hnhtechsolutions.com/hassan/rest_api_for_plant_client/edit_profile_api.php"

        // const formData = new FormData();

        // var file = {
        //     uri: uri,
        //     name: this.state.name,
        // }
        // this.setState({ image: file })
        // console.log("file uri====>",file.name)
        // console.log("file====>",file.uri)
    // }
}


  upload=()=>{

    
    const {img_path} =this.state;
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      images.map((i)=>{
  return     this.setState({pic:i.path})
    
      })
      if(this.state.pic){
       this.uploadImageAsync(this.state.pic); 
      }
      // console.log("#####images*******",images.map());
      // this.setState({ img_path }) 
    });



  }

//   func = () => {
// console.warn("hello")
//     const {img_path} =this.state;
//     ImagePicker.openPicker({
//       multiple: true
//     }).then(images => {
//       images.map((i)=>{
//   return       img_path.push({p:i.path}); 
    
//       })
//       // console.log("#####images*******",images.map());
//       // this.setState({ img_path }) 
//     });
//   }
  
  handleclick = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }


  _renderDimension = () => {
    return <View>

      <Item floatingLabel>
        <Label style={{ color: "#000" }}>Length</Label>
        <Input onChangeText={(text)=>{this.setState({length: text})}} />
      </Item>

      <Item floatingLabel>
        <Label style={{ color: "#000" }}>Width</Label>
        <Input onChangeText={(text)=>{this.setState({width:text})}}/>
      </Item>

      <Item floatingLabel>
        <Label style={{ color: "#000" }}>Height</Label>
        <Input onChangeText={(text)=>{this.setState({height:text})}} />
      </Item>

    </View>
  }

  _renderyear() {
    return <View style={{ padding: 10 }} >
      <ListItem>
        <CheckBox checked={true} />
        <Body>
          <Text style={{ color: "#fff" }}>Daily Stand Up</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox checked={true} />
        <Body>
          <Text style={{ color: "#fff" }}>Discussion with Client</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox checked={true} color="green" />
        <Body>
          <Text style={{ color: "#fff" }}>Finish list Screen</Text>
        </Body>
      </ListItem>
    </View>

  }


  _rendersomething() {
    return <View style={{ marginBottom: "20%" }} >


      <Form>
        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Name</Label>
          <Input
          onChangeText={(name)=>{this.setState({name})}}
              style={{color:"#fff"}}
          />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Description</Label>
          <Input
           onChangeText={(description)=>{this.setState({description})}}
           style={{color:"#fff"}} />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Short Description</Label>
          <Input 
           onChangeText={(short_description)=>{this.setState({short_description})}}
           style={{color:"#fff"}}/>
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Price</Label>
          <Input
           onChangeText={(price)=>{this.setState({price})}}
           style={{color:"#fff"}} />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Regular Price</Label>
          <Input
           onChangeText={(regular_price)=>{this.setState({regular_price})}}
           style={{color:"#fff"}} />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Sale Price</Label>
          <Input
           onChangeText={(sale_price)=>{this.setState({sale_price})}}
           style={{color:"#fff"}} />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>SKU</Label>
          <Input
           onChangeText={(sku)=>{this.setState({sku})}}
           style={{color:"#fff"}} />
        </Item>



        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Date On Sale From</Label>
          <Input
           onChangeText={(date_on_sale_from)=>{this.setState({date_on_sale_from})}}
           style={{color:"#fff"}} />
        </Item>

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Date On Sale To</Label>
          <Input 
           onChangeText={(date_on_sale_to)=>{this.setState({date_on_sale_to})}}
           style={{color:"#fff"}}/>
        </Item>

        {/* <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Stock Quantity</Label>
          <Input 
           onChangeText={(stock_quantity)=>{this.setState({stock_quantity})}}
           style={{color:"#fff"}}/>
        </Item> */}

        <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Weight</Label>
          <Input 
           onChangeText={(weight)=>{this.setState({weight})}}
           style={{color:"#fff"}}/>
        </Item>



        <Accordion
          style={{ backgroundColor: "#fff", marginTop: 25, paddingBottom: 10, paddingTop: 10 }}
          dataArray={Dimension}
          animation={true}
          renderContent={this._renderDimension}
        />



        {/* <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Categories</Label>
          <Input 
           onChangeText={(categories)=>{this.setState({categories})}}
           style={{color:"#fff"}}/>
        </Item> */}




        {/* <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Tags</Label>
          <Input
           onChangeText={(tags)=>{this.setState({tags})}}
           style={{color:"#fff"}} />
        </Item> */}





        {/* <Item floatingLabel>
          <Label style={{ color: "#fff" }}>Attribute</Label>
          <Input
           onChangeText={(attributes)=>{this.setState({attributes})}}
           style={{color:"#fff"}} />
        </Item> */}


        <View style={{ marginTop: "4%" }}>
        <Text style={{ color: "#fff" }}>SELECT IMAGES</Text>
          <Item style={{ justifyContent: "space-between", flexDirection: "row" }}>

            {/* <Button dark
              onPress={this.func}
              style={{ marginBottom: "3%", width: "35%", alignItems: "center", justifyContent: "center" }}>
              <Text>ADD </Text>
            </Button> */}
            <Button dark
              onPress={this.upload}
              style={{ marginBottom: "3%", width: "35%", alignItems: "center", justifyContent: "center" }}>
              <Text>upload </Text>
            </Button>

          </Item>
        </View> 



      </Form>



      <Button success
        style={{ marginTop: 50, justifyContent: "center", borderRadius: 10, width: "50%", alignSelf: "center" }}
        // onPress={() => { this.props.navigation.navigate('select') }}
        onPress={()=>{this.initial_vehicle_intake()}}
        name="upload"
        >
        <Text>submit</Text>
      </Button>

    </View>

  }




  componentDidMount() { this.fetchData1(),this.fetchData(),this.fetchData2(),this.fetchData3(); }

  fetchData = async () => {



    fetch("http://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/products/categories")
      .then(response => response)
      .then(responseJson => responseJson.json())
      .then(res => {
        console.log(res)
        this.setState({ something: res })

      }



      )
      .catch((err) => {
        console.log("err", err)
      });
  };

  renderItem = data => {
    <TouchableOpacity
    >

      <Text style={{ color: "#fff" }}>
        {data.item.name}  </Text>
    </TouchableOpacity>
  }

  checktruefalse = (index) => {
    const { selectedIndexes } = this.state
    let ind = selectedIndexes.findIndex(x => x == index)
console.log(ind)
    if (ind === -1) {
      selectedIndexes.push(index)
      this.setState({ selectedIndexes })
    } else {
      selectedIndexes.splice(ind, 1)
      this.setState({ selectedIndexes })
    }
    

  }

  render_shop = () => {

console.log(this.state.selectedIndexes)
    return (
      <View>

        <FlatList
          data={this.state.something}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => {

            return (

              <ListItem>
                <CheckBox
                  checked={this.state.selectedIndexes.includes(item.item.id)}
                  onPress={() => { this.checktruefalse(item.item.id) }}
                />
                <Body>
                  <Text style={{ color: "#fff" }}>{item.item.name}</Text>
                </Body>
              </ListItem>
            )
          }}
          keyExtractor={item => item.id.toString()}
          extraData={this.state}
        />

      </View>
    )
  }


  
  fetchData3 = async () => {



    fetch("http://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/products/attributes/4/terms/")
      .then(response => response)
      .then(responseJson => responseJson.json())
      .then(res => {
        console.log(res)
        this.setState({ sm: res })

      }



      )
      .catch((err) => {
        console.log("err", err)
      });
  };

  // FlatListItemSeparator = () => <View />;

  // selectItem = data => {
  //   data.item.isSelect = !data.item.isSelect;
  //   data.item.selectedClass = data.item.isSelect;

  //   const index = this.state.dataSource.findIndex(
  //     item => data.item.id === item.id
  //   );

  //   this.state.dataSource[index] = data.item;

  //   this.setState({
  //     dataSource: this.state.dataSource,
  //   });
  // };

  // goToStore = () => this.props.navigation.navigate("Expenses", { selected: this.state.selected, });

  renderItem = data => {
    <TouchableOpacity
    >

      <Text style={{ color: "#fff" }}>
        {data.item.name}  </Text>
    </TouchableOpacity>
  }

  ctf = (index) => {
    const { sl } = this.state
    let ind = sl.findIndex(x => x == index)
console.log(ind)
    if (ind === -1) {
      sl.push(index)
      this.setState({ sl })
    } else {
      sl.splice(ind, 1)
      this.setState({ sl })
    }
    

  }

  render_making_years = () => {

console.log(this.state.sl)
    return (
      <View>

        <FlatList
          data={this.state.sm}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => {

            return (

              <ListItem>
                <CheckBox
                  checked={this.state.sl.includes(item.item.id)}
                  onPress={() => { this.ctf(item.item.id) }}
                />
                <Body>
                  <Text style={{ color: "#fff" }}>{item.item.name}</Text>
                </Body>
              </ListItem>
            )
          }}
          keyExtractor={item => item.id.toString()}
          extraData={this.state}
        />

      </View>
    )
  }



        
  

  fetchData1 = async () => {



    fetch("http://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/products/attributes/5/terms/")
      .then(response => response)
      .then(responseJson => responseJson.json())
      .then(res => {
        console.log(res)
        this.setState({ smethng: res })

      }



      )
      .catch((err) => {
        console.log("err", err)
      });
  };

  renderItem = data => {
    <TouchableOpacity
    >

      <Text style={{ color: "#fff" }}>
        {data.item.name}  </Text>
    </TouchableOpacity>
  }

  checktf = (index) => {
    const { slctdindx } = this.state
    let ind = slctdindx.findIndex(x => x == index)
console.log(ind)
    if (ind === -1) {
      slctdindx.push(index)
      this.setState({ slctdindx })
    } else {
      slctdindx.splice(ind, 1)
      this.setState({ slctdindx })
    }
    

  }

  render_shopbrands = () => {

console.log(this.state.slctdindx)
    return (
      <View>

        <FlatList
          data={this.state.smethng}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => {

            return (

              <ListItem>
                <CheckBox
                  checked={this.state.slctdindx.includes(item.item.id)}
                  onPress={() => { this.checktf(item.item.id) }}
                />
                <Body>
                  <Text style={{ color: "#fff" }}>{item.item.name}</Text>
                </Body>
              </ListItem>
            )
          }}
          keyExtractor={item => item.id.toString()}
          extraData={this.state}
        />

      </View>
    )
  }




  fetchData2 = async () => {



    fetch("http://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/products/attributes/6/terms/")
      .then(response => response)
      .then(responseJson => responseJson.json())
      .then(res => {
        console.log(res)
        this.setState({ smth: res })

      }



      )
      .catch((err) => {
        console.log("err", err)
      });
  };

  // FlatListItemSeparator = () => <View />;

  // selectItem = data => {
  //   data.item.isSelect = !data.item.isSelect;
  //   data.item.selectedClass = data.item.isSelect;

  //   const index = this.state.dataSource.findIndex(
  //     item => data.item.id === item.id
  //   );

  //   this.state.dataSource[index] = data.item;

  //   this.setState({
  //     dataSource: this.state.dataSource,
  //   });
  // };

  // goToStore = () => this.props.navigation.navigate("Expenses", { selected: this.state.selected, });

  renderItem = data => {
    <TouchableOpacity
    >

      <Text style={{ color: "#fff" }}>
        {data.item.name}  </Text>
    </TouchableOpacity>
  }

  chtf = (index) => {
    const { slin } = this.state
    let ind = slin.findIndex(x => x == index)
console.log(ind)
    if (ind === -1) {
      slin.push(index)
      this.setState({ slin })
    } else {
      slin.splice(ind, 1)
      this.setState({ slin })
    }
    

  }

  render_jeep_models = () => {

console.log(this.state.slin)
    return (
      <View>

        <FlatList
          data={this.state.smth}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => {

            return (

              <ListItem>
                <CheckBox
                  checked={this.state.slin.includes(item.item.id)}
                  onPress={() => { this.chtf(item.item.id) }}
                />
                <Body>
                  <Text style={{ color: "#fff" }}>{item.item.name}</Text>
                </Body>
              </ListItem>
            )
          }}
          keyExtractor={item => item.id.toString()}
          extraData={this.state}
        />

      </View>
    )
  }









  render() {
// this.add_data();


    return (
      <Container style={{ flex: 1, backgroundColor: '#231F20' }}>
        <ScrollView>
  
          <View style={{ marginTop: 30, width: "100%" }}>
            <LinearGradient colors={['#678a00', '#51bd4c']}>
              <View style={{ height: 200, alignContent: "center", width: "10%" }}>
                <Image
                  style={{ width: 334, height: 190, marginLeft: "20%" }}
                  source={require('../../assets/jeeps.png')}
                />
              </View>
            </LinearGradient>
          </View>
          <Card style={{ alignSelf: "center", borderRadius: 16, width: "90%", justifyContent: "center", marginTop: "2%", backgroundColor: "#58595B", padding: 10 }}>

            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
              <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>USED </Text>
              <Text style={{ fontWeight: "bold", fontSize: 30, color: "#678a01" }}>CATEGORIES</Text>
            </View>



            <View>

              <Accordion
                style={{ paddingTop: 10 }}
                dataArray={dataArray}
                animation={true}
                renderContent={this._renderyear}
              />
            </View>



            <View>

              <Accordion

                style={{ paddingTop: 10 }}
                dataArray={array1}
                animation={true}
                renderContent={this.render_shop}
              />

           
            </View>

            <View>
            <Accordion

                style={{ paddingTop: 10 }}
                dataArray={Company}
                animation={true}
                renderContent={this.render_shopbrands}
                />

            </View>

           

            
            <View>
                <Accordion

                style={{ paddingTop: 10 }}
                dataArray={jeep_models}
                animation={true}
                renderContent={this.render_jeep_models}
              />

           
            </View>

            <View>
            <Accordion

                style={{ paddingTop: 10 }}
                dataArray={making_year}
                animation={true}
                renderContent={this.render_making_years}
                />

            </View>



            


            <Accordion
              style={{ paddingTop: 10 }}
              dataArray={array3}
              animation={true}
              renderContent={this._rendersomething}

            />


          </Card>
        </ScrollView>
      </Container>
    );
  }
}
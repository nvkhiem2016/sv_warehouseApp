------------------------Code------------------------


----Login----
- App emit Evt_Login(id,pass,idFeature)
- Game On Evt_Login('Event...',HandleLogin) : 
    verifyLogin(id,pass){
        //xử lý đăng nhập
        return user;//chuỗi id-per-countChange-countSettime . VD : warehouse-A0,A1,A2-0-0
    }
    Xuly.HandleLogin(id,pass,idFeature) {
        //callback Evt_Login
        user = verifyLogin(id,pass)
        //thực hiện tách chuỗi
        test = user.split('-');
        //tìm xem idFeature có trong chuỗi test[1] không? nhằm xác định user có quyền vào feature này khôg
        result = test[1].indexOf(idFeature)
        Game emit Evt_ResultLogin(result,user)
    }

- App On Evt_ResultLogin('Event...',ResultLogin)
    ResultLogin(){
        //Kiểm tra result . Nếu result==-2 là sai mật khẩu , ==-1 là không có quyền, >-1 là OKE 
        ...
        if(result>-1){
            //lưu thông tin user và load feature mà người dùng chọn trước đó
        }
    }    
---- End Login ----

---- Inital Setup ----
- Khi vào feature này thì sẽ kiểm tra số lần countSettime của technicial, nếu lớn hơn 0 thì không cho set nữa
- App emit Evt_Settime(idUser,time)
- Game on Evt_Settimt('Event...',HandleSetTime)
    HandleSetTime(){
        //xử lý settime và tăng số lần countSettime của user đó
        XuLy.instance.Initial(time,id);

    }
----End Inital Setup ----

---- Change Password ----
- Khi vào bất kì feature nào thì sẽ kt số lần countChangePass, nếu <=0 thì sẽ bắt user đó đổi pass lần đầu
- App emit Evt_ChangePass(idUser,pass)
- Game on Evt_ChangePass('Event...',HandleChangePassword)
    HandleChangePassword(){
        //xử lý đổi pass
        XuLy.instance.changePassword(id, pass);// update newPass và tăng số lần đổi pass
        
    }


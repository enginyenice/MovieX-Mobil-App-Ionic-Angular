
# MovieX [Film - Dizi ] Uygulaması
## Kocaeli Üniversitesi - Bilgisayar Mühendisliği
## Engin Yenice - 190201133

### MovieX Nedir?
MovieX, Film ve dizi meraklısı bireylerin bir araya gelebileceği ve diğer bireyler ile birlikte paylaşılan filmler ile ilgili iletişim kurabileceği küçük bir sosyal medya projesidir.

### MovieX Neler Yapılabilir?
* Film-dizi paylaşabilirsiniz.
* Film-dizi hakkında görüşlerinizi paylaşabilirsiniz.
* Film-dizi hakkında paylaşılan görüşleri okuyabilirsiniz.

### Hangi API iletişim kurar?
* [Moviex API](http://moviex.enginyenice.com/)  => Kullanıcı giriş çıkış  işlemleri, film paylaşma ve yorum yapma işlemleri buradan gerçekleşir.
* [OMDB](http://www.omdbapi.com/) => Film arama işlemleri bu api üzerinden gerçekleşir. (Bu API  [Moviex API](http://moviex.enginyenice.com/)  içerisinden bağlanmaktadır. Mobil tarafından her hangi bir kod yazmamaktadır.)

### Kullanılan Ek Paketler
**ionic/storage** paketi harici olarak eklenmiştir.

### Nasıl Çalıştırılır
* Gerekli bağılımlıklar npm paketi ile yüklendikten sonra proje ionic cli ile çalıştırılır.

    ``npm install``
    
    ``ionic serve``

### Demo Hesap Bilgileri
* Kullanıcı Adı: **admin**
* Şifre: **admin**
* **!NOT: Kayıt olabilirsiniz**

### Proje Görüntüleri

####  Giriş Yap ve Kayıt Ol
Kullanıcıların uygulamaya giriş yapması için kullanılan sayfalar
![Login&&Register](https://i.hizliresim.com/lvjdBv.png)


####  Ana Sayfa ve Yorum Yap
Tüm paylaşımlar ana sayfa üzerinde yapılmaktadır. Herhangi bir paylaşımın altında bulunan yorum butonuna tıklayarak o paylaşım ile ilgili yapılan yorumları okuyabilir veya yorum yapabilirsiniz.
![Home&&Comment](https://i.hizliresim.com/5o3pJr.png)

#### Paylaşım Yap
Paylaşmak istediğiniz filmi sayfanın üst tarafında bulunan arama ekranı üzerinden arayabilirsiniz. Ardından karşınıza çıkan film bilgilerini inceleyebilir ve Paylaş butonu ile filmi paylaşabilirsiniz.

![PublishTop&&PublishBottom](https://i.hizliresim.com/SI9Jz7.png)

#### Hesabım

Hesabınızın  şifresini değiştirebilirsiniz veya hesabınızdan çıkış yapabilirsiniz.

![Account](https://i.hizliresim.com/Iw65oL.png)

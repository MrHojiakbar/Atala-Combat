# Atala Combat

## Loyihaning maqsadi :
- foydalanuvchi clicker ni ishlatib ozini tangalarini ko'paytiradi
va darajasini oshirish uchun ishlab chiqilgan web sayt.

## Funksional talablar :
- Foydalanuvchi ro'yhatdan o'tmagan bo'lsa darajasini oshira olmaydi
- Foydalanuchini ismi, email, password va coin bo'lishi kerak
- Foydalanuvchi ism, email, password bilan ro'yhatdan o'tadi
- Profilga kirish email va password orqali bo'ladi
- Foydalanuvchi ma'lum bir coin yig'ganda darajasi oshirlishi kerak
- Foydalanuvchi darajasi oshganda atala ni rasmi ham o'zgaradi
- Foydalanuvchi foydalanuvchiga coin o'tqiza olishi kerak
- Foydalanuvchi o'zini profilini o'chirib tashla olishi kerak
- Foydalanuvchi o'zini profilini yangilay olishi kerak

## No Funksional talablar:
- Tezlik
- Xavfsizlik

## Database models:
1. User:
    - id (Number,PK)
    - name (String),
    - email (String),
    - password (String),
    - coin (Number)
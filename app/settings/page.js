"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";


export default function GeneralSettingsPage() {
  const [platformName, setPlatformName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const [currency, setCurrency] = useState("USD");
  const [defaultCity, setDefaultCity] = useState("إسطنبول");

  const [defaultStatus, setDefaultStatus] = useState("جديد");
  const [autoReply, setAutoReply] = useState("");

  const [language, setLanguage] = useState("ar");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");

  const [whatsapp, setWhatsapp] = useState("");

  return (
    <div dir="rtl" className="p-6 space-y-6 text-foreground">

      {/* ————————————————————————
          عنوان الصفحة
      ———————————————————————— */}
      <header>
        <h1 className="text-xl sm:text-2xl font-bold">الإعدادات العامة</h1>
        <p className="text-sm text-muted-foreground">
          من هنا يمكنك التحكم بإعدادات النظام، العقارات، الرسائل، والواجهة.
        </p>
      </header>


      {/* ————————————————————————
          معلومات المنصة
      ———————————————————————— */}
      <Card>
        <CardHeader>
          <CardTitle>معلومات المنصة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <Input
            placeholder="اسم المنصة أو الشركة"
            value={platformName}
            onChange={(e) => setPlatformName(e.target.value)}
          />

          <Input
            placeholder="وصف قصير يظهر في النظام"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            placeholder="البريد الرئيسي للتواصل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button className="mt-2">حفظ التغييرات</Button>
        </CardContent>
      </Card>


      {/* ————————————————————————
          إعدادات العقارات
      ———————————————————————— */}
      <Card>
        <CardHeader>
          <CardTitle>إعدادات العقارات</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="اختر العملة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">دولار USD</SelectItem>
              <SelectItem value="TRY">ليرة تركية TRY</SelectItem>
              <SelectItem value="EUR">يورو EUR</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="المدينة الافتراضية للعقارات"
            value={defaultCity}
            onChange={(e) => setDefaultCity(e.target.value)}
          />

          <Button className="mt-2">حفظ التغييرات</Button>
        </CardContent>
      </Card>


      {/* ————————————————————————
          إعدادات الطلبات والرسائل
      ———————————————————————— */}
      <Card>
        <CardHeader>
          <CardTitle>إعدادات الطلبات والرسائل</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          
          <Select value={defaultStatus} onValueChange={setDefaultStatus}>
            <SelectTrigger>
              <SelectValue placeholder="اختر الحالة الافتراضية" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="جديد">جديد</SelectItem>
              <SelectItem value="قيد المراجعة">قيد المراجعة</SelectItem>
              <SelectItem value="مغلق">مغلق</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="النص الافتراضي للرد التلقائي (اختياري)"
            value={autoReply}
            onChange={(e) => setAutoReply(e.target.value)}
          />

          <Button className="mt-2">حفظ الإعدادات</Button>
        </CardContent>
      </Card>


      {/* ————————————————————————
          اللغة والمنطقة
      ———————————————————————— */}
      <Card>
        <CardHeader>
          <CardTitle>اللغة والمنطقة</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="اختر اللغة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="en">الإنجليزية</SelectItem>
            </SelectContent>
          </Select>

          <Select value={dateFormat} onValueChange={setDateFormat}>
            <SelectTrigger>
              <SelectValue placeholder="تنسيق التاريخ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
              <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
            </SelectContent>
          </Select>

          <Button className="mt-2">حفظ التغييرات</Button>
        </CardContent>
      </Card>


      {/* ————————————————————————
          تواصل وإشعارات
      ———————————————————————— */}
      <Card>
        <CardHeader>
          <CardTitle>التواصل والإشعارات</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <Input
            placeholder="رقم واتساب للتواصل"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <Button className="mt-2">حفظ التغييرات</Button>
        </CardContent>
      </Card>

    </div>
  );
}
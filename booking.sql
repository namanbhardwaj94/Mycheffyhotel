PGDMP                          z            try    12.7    12.7                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    25916    try    DATABASE     ?   CREATE DATABASE try WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE try;
                postgres    false            ?            1259    26935    Booking    TABLE     ?  CREATE TABLE public."Booking" (
    id text NOT NULL,
    "userId" integer NOT NULL,
    "hotelId" text NOT NULL,
    start timestamp(3) without time zone NOT NULL,
    "end" timestamp(3) without time zone NOT NULL,
    "startStr" text NOT NULL,
    "endStr" text NOT NULL,
    status public."Status" DEFAULT 'PENDING'::public."Status" NOT NULL,
    "paymentStatus" public."PaymentStatus" DEFAULT 'PENDING'::public."PaymentStatus" NOT NULL
);
    DROP TABLE public."Booking";
       public         heap    postgres    false                      0    26935    Booking 
   TABLE DATA           y   COPY public."Booking" (id, "userId", "hotelId", start, "end", "startStr", "endStr", status, "paymentStatus") FROM stdin;
    public          postgres    false    206   r	       ?
           2606    26944    Booking Booking_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Booking"
    ADD CONSTRAINT "Booking_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Booking" DROP CONSTRAINT "Booking_pkey";
       public            postgres    false    206            ?
           2606    26956    Booking Booking_hotelId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Booking"
    ADD CONSTRAINT "Booking_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES public.hotel(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 J   ALTER TABLE ONLY public."Booking" DROP CONSTRAINT "Booking_hotelId_fkey";
       public          postgres    false    206               d   x?Kή(I-???1?4?L/.I-????/ɩ?4?Lή(??4.?5002?eWXV??qZ??????a3?Tp?????~.?~?0?+F??? ?P!?     
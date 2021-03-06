PGDMP     ;    ;                 z            try    12.7    12.7 	               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    25916    try    DATABASE     ?   CREATE DATABASE try WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE try;
                postgres    false            ?            1259    26919    Address    TABLE       CREATE TABLE public."Address" (
    id text NOT NULL,
    street text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    "phoneNumber" text NOT NULL,
    latitude double precision NOT NULL,
    longitude double precision NOT NULL,
    "hotelId" text NOT NULL
);
    DROP TABLE public."Address";
       public         heap    postgres    false                      0    26919    Address 
   TABLE DATA           k   COPY public."Address" (id, street, city, state, "phoneNumber", latitude, longitude, "hotelId") FROM stdin;
    public          postgres    false    204   ?	       ?
           2606    26926    Address Address_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Address"
    ADD CONSTRAINT "Address_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Address" DROP CONSTRAINT "Address_pkey";
       public            postgres    false    204            ?
           1259    26945    Address_hotelId_key    INDEX     W   CREATE UNIQUE INDEX "Address_hotelId_key" ON public."Address" USING btree ("hotelId");
 )   DROP INDEX public."Address_hotelId_key";
       public            postgres    false    204            ?
           2606    26946    Address Address_hotelId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Address"
    ADD CONSTRAINT "Address_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES public.hotel(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public."Address" DROP CONSTRAINT "Address_hotelId_fkey";
       public          postgres    false    204               ?  x????n?0E??W?$??--#A8]4?n(??d?l?,??KQq?nt@ ✹??s?O?LPI???;.?kB1?x/?+??0?h?!'oE??i??d???!/???'P?(}dJHdT?0BB?[?$??E???????%?M?_n??QEރ??U?mG???v??f[Yx6?lM
'ӘŰ<??#DJ+pW????
??	n}?kn?H??T?4b?;}(??FO??6^ԝ?C-??VU??[?O.??Y??W??gk??^O?9U??4?V?c??ٮR?K??|?-???]e???? ??S???Q????=?7`-KS???s&KU??^?[?<?9'?????\?j;6?;???i?)׉????Ο[?@???DO*$M?F']???$?6?O???)?"\?,???o??U     
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Nov 2020 pada 07.08
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category_table`
--

CREATE TABLE `category_table` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category_table`
--

INSERT INTO `category_table` (`category_id`, `category_name`) VALUES
(1, 'Makanan Khas Jawa Barat'),
(2, 'Makanan Khas Banten');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history_table`
--

CREATE TABLE `history_table` (
  `order_id` int(11) NOT NULL,
  `invoices` varchar(12) NOT NULL,
  `cashier` text NOT NULL,
  `order_dates` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history_table`
--

INSERT INTO `history_table` (`order_id`, `invoices`, `cashier`, `order_dates`, `product_id`, `quantity`, `amount`) VALUES
(2, '222', 'Soleh', '2020-08-01 17:00:00', 2, 3, 30000),
(3, '99', 'Name Cashier', '2020-08-02 16:17:12', 1, 11, 10000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `level_users`
--

CREATE TABLE `level_users` (
  `level_id` int(11) NOT NULL,
  `level_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `order_table`
--

CREATE TABLE `order_table` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_order` varchar(255) NOT NULL,
  `quality_order` varchar(255) NOT NULL,
  `total_price` int(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `order_table`
--

INSERT INTO `order_table` (`order_id`, `user_id`, `product_order`, `quality_order`, `total_price`, `order_date`) VALUES
(94, 6, 'Lepet,Hayam Bakakak,Leumeung,Kue Jojorong', '1,1,1,1', 66000, '2020-10-31 13:35:49'),
(95, 6, 'Hayam Bakakak,Leumeung', '1,1', 44000, '2020-10-31 13:36:48'),
(96, 6, 'Cireng,Hayam Bakakak', '1,1', 40700, '2020-10-31 13:39:54'),
(97, 6, 'Lepet', '1', 11000, '2020-10-31 13:40:51'),
(98, 6, 'Leumeung', '1', 16500, '2020-10-31 13:45:38'),
(99, 5, 'Hayam Bakakak,Leumeung,Kue Jojorong', '1,1,1', 55000, '2020-11-01 00:41:47'),
(100, 5, 'Hayam Bakakak,Leumeung,Kue Jojorong', '1,1,1', 55000, '2020-11-01 00:43:21'),
(101, 5, 'Hayam Bakakak,Leumeung,Kue Jojorong', '1,1,1', 55000, '2020-11-01 00:45:23'),
(102, 5, 'Cireng,Hayam Bakakak,Leumeung,Kue Jojorong,Lepet,Kerupuk Melarat', '1,1,1,1,1,1', 90200, '2020-11-01 00:46:13'),
(103, 5, 'Cireng', '1', 13200, '2020-11-01 00:47:57'),
(104, 5, 'Hayam Bakakak', '1', 27500, '2020-11-01 01:01:25'),
(105, 5, 'Hayam Bakakak,Leumeung', '1,1', 44000, '2020-11-01 01:03:34'),
(106, 5, 'Cireng', '1', 13200, '2020-11-01 02:15:09'),
(107, 5, 'Hayam Bakakak', '1', 27500, '2020-11-01 02:17:12'),
(108, 5, 'Hayam Bakakak', '1', 27500, '2020-11-01 02:18:06'),
(109, 5, 'Kue Jojorong', '1', 11000, '2020-11-01 02:18:15'),
(110, 5, 'Lepet', '1', 11000, '2020-11-01 02:19:09'),
(111, 5, 'Hayam Bakakak', '1', 27500, '2020-11-01 02:21:32'),
(112, 5, 'Leumeung', '1', 16500, '2020-11-01 02:22:39'),
(113, 5, 'Karedok,Soto Mie', '1,1', 24200, '2020-11-01 02:24:56'),
(114, 5, 'Hayam Bakakak,Cireng,Leumeung,Kerupuk Melarat,Kue Jojorong,Lepet,Opak,Nasi Timbel,Karedok,Nasi Liwet,Soto Bandung,Soto Mie', '1,1,1,1,1,1,1,1,15,1,1,1', 314600, '2020-11-01 02:31:28'),
(115, 1, 'Cireng', '1', 13200, '2020-11-01 02:35:17'),
(116, 1, 'Leumeung,Hayam Bakakak,Cireng', '1,1,1', 57200, '2020-11-01 02:35:29'),
(117, 1, 'Nasi Timbel,Nasi Liwet', '1,1', 33000, '2020-11-01 02:36:18'),
(118, 5, 'Soto Mie', '1', 13200, '2020-11-01 02:45:31'),
(119, 5, 'Soto Mie', '1', 13200, '2020-11-01 02:45:36'),
(120, 5, 'Hayam Bakakak', '1', 27500, '2020-11-01 02:53:03'),
(121, 1, 'Kerupuk Melarat,Kue Jojorong,Lepet', '1,1,1', 33000, '2020-11-01 05:44:08'),
(122, 1, 'Kue Jojorong,Lepet', '1,1', 22000, '2020-11-01 05:46:40'),
(123, 1, 'Lepet,Kerupuk Melarat,Opak,Nasi Timbel,Nasi Liwet,Kue Jojorong', '1,1,1,1,1,1', 71500, '2020-11-01 05:47:04'),
(124, 1, 'Cireng,Hayam Bakakak,Leumeung', '1,1,1', 57200, '2020-11-01 06:36:13'),
(125, 2, 'Cireng,Hayam Bakakak,Lepet', '1,1,1', 51700, '2020-11-01 11:46:02'),
(126, 2, 'Cireng,Hayam Bakakak,Leumeung', '1,1,1', 57200, '2020-11-01 11:46:31'),
(127, 1, 'Opak,Hayam Bakakak', '1,1', 33000, '2020-11-02 00:37:33'),
(128, 1, 'Cireng,Hayam Bakakak,Leumeung,Kue Jojorong,Lepet,Kerupuk Melarat', '8,6,7,7,1,1', 485100, '2020-11-02 01:19:51'),
(129, 1, 'Kue Jojorong,Lepet', '1,1', 22000, '2020-11-02 03:35:04'),
(130, 1, 'Soto Mie', '1', 16500, '2020-11-02 03:46:44'),
(131, 1, 'Soto Mie', '1', 16500, '2020-11-02 03:46:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products_table`
--

CREATE TABLE `products_table` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(10,0) NOT NULL,
  `product_stock` int(11) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `change_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products_table`
--

INSERT INTO `products_table` (`product_id`, `product_name`, `product_price`, `product_stock`, `product_image`, `create_date`, `change_at`, `category_id`) VALUES
(1, 'Cireng', '12000', 50, 'https://moondoggiesmusic.com/wp-content/uploads/2019/03/Cireng.jpg', '2020-08-13 13:35:29', '2020-08-13 13:35:29', 1),
(2, 'Hayam Bakakak', '25000', 100, 'https://moondoggiesmusic.com/wp-content/uploads/2019/03/media-bogor-kuliner-grand-savero-ayam-bakar-madu.jpg', '2020-08-13 13:37:25', '2020-08-13 13:37:25', 1),
(3, 'Leumeung', '15000', 30, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Leumeung-Makanan-Khas-Banten.jpg', '2020-08-13 13:38:17', '2020-08-13 13:38:17', 2),
(4, 'Kerupuk Melarat', '10000', 20, 'https://moondoggiesmusic.com/wp-content/uploads/2019/03/Kerupuk-Melarat.jpg', '2020-08-13 13:39:03', '2020-08-13 13:39:03', 1),
(5, 'Lepet', '10000', 25, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Lepet-Khas-Banten.jpg', '2020-08-13 13:39:41', '2020-08-13 13:39:41', 2),
(6, 'Kue Jojorong', '10000', 50, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Kue-Jojorong-Khas-Banten.jpg', '2020-08-13 13:40:14', '2020-08-13 13:40:14', 2),
(7, 'Opak', '5000', 100, 'http://makananoleholeh.com/wp-content/uploads/2017/05/Opak-Khas-Banten.jpg', '2020-08-13 13:40:50', '2020-08-13 13:40:50', 2),
(22, 'Nasi Timbel', '15000', 0, '/images/1603505593883-image.jpg', '2020-10-24 02:13:14', '2020-10-24 02:13:14', 1),
(23, 'Nasi Liwet', '15000', 0, '/images/1603506282903-image.jpg', '2020-10-24 02:24:42', '2020-10-24 02:24:42', 1),
(27, 'Soto Mie', '15000', 0, '/images/1604288722987-image.jpg', '2020-11-02 03:45:24', '2020-11-02 03:45:24', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL,
  `registered_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `username`, `password`, `level_id`, `registered_date`) VALUES
(1, 'Name 1', 'name1@surel.com', 'nameone', '$2b$10$fvlyujW27/toKMNCgMQiHepP/zvyUKZdfHKnOJ/L/YKSPAnwUZlgK', 1, '2020-08-14 01:38:39'),
(2, 'Name 2', 'name2@surel.com', 'nametwo', '$2b$10$XNeJNtjLliLhwKTFmhuMQ.Ywcqtp1ZMnjiy4/a.eqldLoY2pmTvGG', 2, '2020-08-14 01:39:33'),
(3, 'Name 3', 'name3@surel.com', 'namethree', '$2b$10$p.akV89jj/ZJSOAdWv2jR.7/imXqQAt6GaALM/ryjEETjGk7oqYfm', 2, '2020-08-14 01:39:53'),
(4, 'Name 4', 'name4@surel.com', 'namefour', '$2b$10$poNCw1cap3X5QPgnO6QLdOGUHiCJLPFcQ6SqO2iwr/ZNn2kHX8MDi', 1, '2020-08-17 05:28:04'),
(5, 'Name 5', 'name5@surel.com', 'namefive', '$2b$10$vpgY06Q3UxEuYhMaeswEzOnNpagIzIkzY7WTwWMmzwtop6bC.pw8a', 2, '2020-08-17 13:58:59'),
(6, 'Name 6', 'name6@surel.com', 'namesix', '$2b$10$OyM35l7jL8Xbp.oTUzgN/.EqPWP4Z.yhpVjcRqfasONZ7cryVMTSu', 1, '2020-08-17 14:01:39'),
(7, 'Name 7', 'name7@surel.com', 'nameseven', '$2b$10$gT1q9Rp2yxhoY6FK46RnAeD.DtcheRj4344SF9wUX5/uFpCUf2hue', 1, '2020-08-17 14:06:28'),
(8, 'Name 8', 'name8@surel.com', 'nameeigth', '$2b$10$wdMXUdPN.2q.wcjGkcIU/OYDHQxjt40LuslU0tWhNgiPHW4FCqUvG', 2, '2020-08-30 18:07:38'),
(9, 'Name 9', 'name9@surel.com', 'namenine', '$2b$10$idtAZb0B0Pewd21FJpiTj.DXNdRP.rohHXGJpElItATFWU8ardGNC', 1, '2020-08-30 18:24:33'),
(10, 'Name 10', 'name10@surel.com', 'nameteen', '$2b$10$g74djj7lmUogewxh9hSJHOOHguS4ey6m8vhWRKfk/IBGeYWYxMo1C', 2, '2020-08-31 07:01:16');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `history_table`
--
ALTER TABLE `history_table`
  ADD PRIMARY KEY (`order_id`);

--
-- Indeks untuk tabel `order_table`
--
ALTER TABLE `order_table`
  ADD PRIMARY KEY (`order_id`);

--
-- Indeks untuk tabel `products_table`
--
ALTER TABLE `products_table`
  ADD PRIMARY KEY (`product_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `history_table`
--
ALTER TABLE `history_table`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `order_table`
--
ALTER TABLE `order_table`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT untuk tabel `products_table`
--
ALTER TABLE `products_table`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

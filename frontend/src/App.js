import React, { Component } from "react";
import "./index.module.css";
import showPhotos from "./Component/BasicFunctions";
import styles from "./styles.module.scss";
import HomePage from "./Pages/Home";
import Button from "@mui/material/Button";

export default function App() {
	return (
		<div className={styles.ContainerBG}>
			<div className={styles.Header}>
				<div style={{ color: `white` }}>
					<a
						style={{
							color: `white`,
							fontSize: 25,
							fontFamily: `Italic`,
							fontWeight: `bold`,
							width: `100`,
						}}
					>
						Facebook
					</a>
					<div className={styles.ContainerSearchBar}>
						<input
							type="text"
							className={styles.SearchBar}
							placeholder="Search here...."
						/>
						{/* <SearchIcon /> */}
					</div>
				</div>
			</div>
			<HomePage />
			<div className={styles.ProfileBackground}>
				Profile Background Image
				<div className={styles.ProfileImage}>Profile Image</div>
				<div className={styles.ButtonContainer}>
					<Button variant="outlined">Info</Button>
					<Button variant="outlined">Friends</Button>
					<Button variant="outlined" onClick={showPhotos}>
						Photos
					</Button>
					<Button variant="outlined">Timeline</Button>
					<Button variant="outlined">More</Button>
				</div>
			</div>
			<div style={{ position: "sticky", top: "10px" }}>
				<div className={styles.NewsFeed}>
					NewsFeed
					<div className={styles.Feeds}>NewsImage</div>
				</div>
			</div>
			<div className={styles.ContainerofPostandTimeline}>
				<div className={styles.ContainerTimeline}>
					<div className={styles.ContainerPhotos}>
						<h4 style={{ paddingLeft: `50px` }}>Info</h4>
						<ul style={{ marginLeft: `-80px`, marginTop: `60px` }}>
							<li>Suryansh Neekhra</li>
							<li>Male</li>
							<li>Studied at - GD Goenka Public School</li>
						</ul>
					</div>
					<div className={styles.ContainerPhotos}>
						<h4 style={{ paddingLeft: `50px` }}>Photos</h4>
						<ul style={{ marginLeft: `-100px`, marginTop: `60px` }}>
							<li>Suryansh Neekhra</li>
							<li>Male</li>
							<li>Studied at - GD Goenka Public School</li>
						</ul>
					</div>
				</div>
				<div className={styles.ContainerPosts}>hello</div>
			</div>
		</div>
	);
}

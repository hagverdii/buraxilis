import { useState } from 'react'
import { cadets } from '../data/cadets'
import './App.css'

const App = () => {
	const [firstGroup, setFirstGroup] = useState(
		JSON.parse(localStorage.getItem('firstGroup')) || { ...cadets.firstGroup }
	)
	const [secondGroup, setSecondGroup] = useState(
		JSON.parse(localStorage.getItem('secondGroup')) || { ...cadets.secondGroup }
	)
	const [thirdGroup, setThirdGroup] = useState(
		JSON.parse(localStorage.getItem('thirdGroup')) || { ...cadets.thirdGroup }
	)
	const [fourthGroup, setFourthGroup] = useState(
		JSON.parse(localStorage.getItem('fourthGroup')) || { ...cadets.fourthGroup }
	)
	const [fifthGroup, setFifthGroup] = useState(
		JSON.parse(localStorage.getItem('fifthGroup')) || { ...cadets.fifthGroup }
	)
	const [sixthGroup, setSixthGroup] = useState(
		JSON.parse(localStorage.getItem('sixthGroup')) || { ...cadets.sixthGroup }
	)
	const [seventhGroup, setSeventhGroup] = useState(
		JSON.parse(localStorage.getItem('seventhGroup')) || {
			...cadets.seventhGroup,
		}
	)

	let counter1 = 0
	let counter2 = 0
	let counter3 = 0
	let counter4 = 0

	return (
		<>
			<div className='buttons'>
				<button
					onClick={(e) => {
						setFirstGroup({ ...cadets.firstGroup })
						setSecondGroup({ ...cadets.secondGroup })
						setThirdGroup({ ...cadets.thirdGroup })
						setFourthGroup({ ...cadets.fourthGroup })
						setFifthGroup({ ...cadets.fifthGroup })
						setSixthGroup({ ...cadets.sixthGroup })
						setSeventhGroup({ ...cadets.seventhGroup })
						localStorage.removeItem('firstGroup')
						localStorage.removeItem('secondGroup')
						localStorage.removeItem('thirdGroup')
						localStorage.removeItem('fourthGroup')
						localStorage.removeItem('fifthGroup')
						localStorage.removeItem('sixthGroup')
						localStorage.removeItem('seventhGroup')
					}}
				>
					Sıfırla
				</button>
				<button
					onClick={() => {
						localStorage.setItem('firstGroup', JSON.stringify(firstGroup))
						localStorage.setItem('secondGroup', JSON.stringify(secondGroup))
						localStorage.setItem('thirdGroup', JSON.stringify(thirdGroup))
						localStorage.setItem('fourthGroup', JSON.stringify(fourthGroup))
						localStorage.setItem('fifthGroup', JSON.stringify(fifthGroup))
						localStorage.setItem('sixthGroup', JSON.stringify(sixthGroup))
						localStorage.setItem('seventhGroup', JSON.stringify(seventhGroup))
					}}
				>
					Yadda saxla
				</button>
				{/* <button
					onClick={() =>
						console.log(
							firstGroup[1],
							secondGroup[1],
							thirdGroup[1],
							fourthGroup[1],
							fifthGroup[1],
							sixthGroup[1],
							seventhGroup[1]
						)
					}
				>
					Test
				</button> */}
			</div>
			<div className='groups-container'>
				{/* 1 taq */}
				<div className='group'>
					<p>
						<strong>I taqım</strong>
					</p>
					<table style={{ width: '60%' }}>
						<thead>
							<tr>
								<th>№</th>
								<th style={{ textAlign: 'left' }}>Soyad, ad və ata adı</th>
								<th>Əlaçı</th>
								<th>İntizamsız</th>
								<th>İdman kafi</th>
								<th>İdman kəsr</th>
								<th>Tədris kafi</th>
								<th>Tədris kəsr</th>
								<th>Atəş</th>
								<th>Sıra və nizamnamə</th>
								<th>Xidmət</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: Object.keys(firstGroup).length }).map(
								(_, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td style={{ textAlign: 'left' }}>
												{firstGroup[index + 1].name}
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].perfect}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	perfect: !prev[index + 1].perfect,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].violation}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	violation: !prev[index + 1].violation,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].sport_three}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_three: !prev[index + 1].sport_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].sport_two}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_two: !prev[index + 1].sport_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].study_three}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_three: !prev[index + 1].study_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].study_two}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_two: !prev[index + 1].study_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].shooting}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	shooting: !prev[index + 1].shooting,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].stepping}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	stepping: !prev[index + 1].stepping,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={firstGroup[index + 1].duty}
													onChange={() =>
														setFirstGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	duty: !prev[index + 1].duty,
																},
															}
														})
													}
												/>
											</td>
										</tr>
									)
								}
							)}
						</tbody>
					</table>
				</div>

				{/* 2 taq */}
				<div className='group'>
					<p>
						<strong>II taqım</strong>
					</p>
					<table style={{ width: '60%' }}>
						<thead>
							<tr>
								<th>№</th>
								<th style={{ textAlign: 'left' }}>Soyad, ad və ata adı</th>
								<th>Əlaçı</th>
								<th>İntizamsız</th>
								<th>İdman kafi</th>
								<th>İdman kəsr</th>
								<th>Tədris kafi</th>
								<th>Tədris kəsr</th>
								<th>Xidmət</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: Object.keys(secondGroup).length }).map(
								(_, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td style={{ textAlign: 'left' }}>
												{secondGroup[index + 1].name}
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].perfect}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	perfect: !prev[index + 1].perfect,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].violation}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	violation: !prev[index + 1].violation,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].sport_three}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_three: !prev[index + 1].sport_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].sport_two}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_two: !prev[index + 1].sport_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].study_three}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_three: !prev[index + 1].study_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].study_two}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_two: !prev[index + 1].study_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].shooting}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	shooting: !prev[index + 1].shooting,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].stepping}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	stepping: !prev[index + 1].stepping,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={secondGroup[index + 1].duty}
													onChange={() =>
														setSecondGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	duty: !prev[index + 1].duty,
																},
															}
														})
													}
												/>
											</td>
										</tr>
									)
								}
							)}
						</tbody>
					</table>
				</div>

				{/* 3 taq */}
				<div className='group'>
					<p>
						<strong>III taqım</strong>
					</p>
					<table style={{ width: '60%' }}>
						<thead>
							<tr>
								<th>№</th>
								<th style={{ textAlign: 'left' }}>Soyad, ad və ata adı</th>
								<th>Əlaçı</th>
								<th>İntizamsız</th>
								<th>İdman kafi</th>
								<th>İdman kəsr</th>
								<th>Tədris kafi</th>
								<th>Tədris kəsr</th>
								<th>Xidmət</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: Object.keys(thirdGroup).length }).map(
								(_, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td style={{ textAlign: 'left' }}>
												{thirdGroup[index + 1].name}
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].perfect}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	perfect: !prev[index + 1].perfect,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].violation}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	violation: !prev[index + 1].violation,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].sport_three}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_three: !prev[index + 1].sport_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].sport_two}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_two: !prev[index + 1].sport_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].study_three}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_three: !prev[index + 1].study_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].study_two}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_two: !prev[index + 1].study_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].shooting}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	shooting: !prev[index + 1].shooting,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].stepping}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	stepping: !prev[index + 1].stepping,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={thirdGroup[index + 1].duty}
													onChange={() =>
														setThirdGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	duty: !prev[index + 1].duty,
																},
															}
														})
													}
												/>
											</td>
										</tr>
									)
								}
							)}
						</tbody>
					</table>
				</div>

				{/* 4 taq */}
				<div className='group'>
					<p>
						<strong>IV taqım</strong>
					</p>
					<table style={{ width: '60%' }}>
						<thead>
							<tr>
								<th>№</th>
								<th style={{ textAlign: 'left' }}>Soyad, ad və ata adı</th>
								<th>Əlaçı</th>
								<th>İntizamsız</th>
								<th>İdman kafi</th>
								<th>İdman kəsr</th>
								<th>Tədris kafi</th>
								<th>Tədris kəsr</th>
								<th>Xidmət</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: Object.keys(fourthGroup).length }).map(
								(_, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td style={{ textAlign: 'left' }}>
												{fourthGroup[index + 1].name}
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].perfect}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	perfect: !prev[index + 1].perfect,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].violation}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	violation: !prev[index + 1].violation,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].sport_three}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_three: !prev[index + 1].sport_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].sport_two}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_two: !prev[index + 1].sport_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].study_three}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_three: !prev[index + 1].study_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].study_two}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_two: !prev[index + 1].study_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].shooting}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	shooting: !prev[index + 1].shooting,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].stepping}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	stepping: !prev[index + 1].stepping,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fourthGroup[index + 1].duty}
													onChange={() =>
														setFourthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	duty: !prev[index + 1].duty,
																},
															}
														})
													}
												/>
											</td>
										</tr>
									)
								}
							)}
						</tbody>
					</table>
				</div>

				{/* 5 taq */}
				<div className='group'>
					<p>
						<strong>V taqım</strong>
					</p>
					<table style={{ width: '60%' }}>
						<thead>
							<tr>
								<th>№</th>
								<th style={{ textAlign: 'left' }}>Soyad, ad və ata adı</th>
								<th>Əlaçı</th>
								<th>İntizamsız</th>
								<th>İdman kafi</th>
								<th>İdman kəsr</th>
								<th>Tədris kafi</th>
								<th>Tədris kəsr</th>
								<th>Xidmət</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: Object.keys(fifthGroup).length }).map(
								(_, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td style={{ textAlign: 'left' }}>
												{fifthGroup[index + 1].name}
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].perfect}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	perfect: !prev[index + 1].perfect,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].violation}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	violation: !prev[index + 1].violation,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].sport_three}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_three: !prev[index + 1].sport_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].sport_two}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_two: !prev[index + 1].sport_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].study_three}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_three: !prev[index + 1].study_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].study_two}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_two: !prev[index + 1].study_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].shooting}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	shooting: !prev[index + 1].shooting,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].stepping}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	stepping: !prev[index + 1].stepping,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={fifthGroup[index + 1].duty}
													onChange={() =>
														setFifthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	duty: !prev[index + 1].duty,
																},
															}
														})
													}
												/>
											</td>
										</tr>
									)
								}
							)}
						</tbody>
					</table>
				</div>

				{/* 6 taq */}
				<div className='group'>
					<p>
						<strong>VI taqım</strong>
					</p>
					<table style={{ width: '60%' }}>
						<thead>
							<tr>
								<th>№</th>
								<th style={{ textAlign: 'left' }}>Soyad, ad və ata adı</th>
								<th>Əlaçı</th>
								<th>İntizamsız</th>
								<th>İdman kafi</th>
								<th>İdman kəsr</th>
								<th>Tədris kafi</th>
								<th>Tədris kəsr</th>
								<th>Xidmət</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: Object.keys(sixthGroup).length }).map(
								(_, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td style={{ textAlign: 'left' }}>
												{sixthGroup[index + 1].name}
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].perfect}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	perfect: !prev[index + 1].perfect,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].violation}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	violation: !prev[index + 1].violation,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].sport_three}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_three: !prev[index + 1].sport_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].sport_two}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_two: !prev[index + 1].sport_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].study_three}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_three: !prev[index + 1].study_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].study_two}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_two: !prev[index + 1].study_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].shooting}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	shooting: !prev[index + 1].shooting,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].stepping}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	stepping: !prev[index + 1].stepping,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={sixthGroup[index + 1].duty}
													onChange={() =>
														setSixthGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	duty: !prev[index + 1].duty,
																},
															}
														})
													}
												/>
											</td>
										</tr>
									)
								}
							)}
						</tbody>
					</table>
				</div>

				{/* 7 taq */}
				<div className='group'>
					<p>
						<strong>VII taqım</strong>
					</p>
					<table style={{ width: '60%' }}>
						<thead>
							<tr>
								<th>№</th>
								<th style={{ textAlign: 'left' }}>Soyad, ad və ata adı</th>
								<th>Əlaçı</th>
								<th>İntizamsız</th>
								<th>İdman kafi</th>
								<th>İdman kəsr</th>
								<th>Tədris kafi</th>
								<th>Tədris kəsr</th>
								<th>Xidmət</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: Object.keys(seventhGroup).length }).map(
								(_, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td style={{ textAlign: 'left' }}>
												{seventhGroup[index + 1].name}
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].perfect}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	perfect: !prev[index + 1].perfect,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].violation}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	violation: !prev[index + 1].violation,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].sport_three}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_three: !prev[index + 1].sport_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].sport_two}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	sport_two: !prev[index + 1].sport_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].study_three}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_three: !prev[index + 1].study_three,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].study_two}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	study_two: !prev[index + 1].study_two,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].shooting}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	shooting: !prev[index + 1].shooting,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].stepping}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	stepping: !prev[index + 1].stepping,
																},
															}
														})
													}
												/>
											</td>
											<td>
												<input
													type='checkbox'
													checked={seventhGroup[index + 1].duty}
													onChange={() =>
														setSeventhGroup((prev) => {
															return {
																...prev,
																[index + 1]: {
																	...prev[index + 1],
																	duty: !prev[index + 1].duty,
																},
															}
														})
													}
												/>
											</td>
										</tr>
									)
								}
							)}
						</tbody>
					</table>
				</div>
			</div>

			<div
				style={{
					marginLeft: '1rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<p>Buraxılış siyahısı</p>
				<table style={{ width: '350px' }}>
					<thead>
						<tr>
							<th>S/s</th>
							<th>Rütbəsi</th>
							<th>Soyad, ad və ata adı</th>
							<th>Taqım</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(firstGroup)?.map((key) => {
							if (
								!firstGroup[key].duty &&
								!firstGroup[key].perfect &&
								!firstGroup[key].violation &&
								!firstGroup[key].sport_three &&
								!firstGroup[key].sport_two &&
								!firstGroup[key].study_three &&
								!firstGroup[key].study_two &&
								!firstGroup[key].shooting &&
								!firstGroup[key].stepping
							) {
								counter1++
								return (
									<tr key={firstGroup[key].name + 'b'}>
										<td>{counter1}</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].name}
										</td>
										<td>{firstGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(secondGroup)?.map((key) => {
							if (
								!secondGroup[key].duty &&
								!secondGroup[key].perfect &&
								!secondGroup[key].violation &&
								!secondGroup[key].sport_three &&
								!secondGroup[key].sport_two &&
								!secondGroup[key].study_three &&
								!secondGroup[key].study_two &&
								!secondGroup[key].shooting &&
								!secondGroup[key].stepping
							) {
								counter1++
								return (
									<tr key={secondGroup[key].name + 'b'}>
										<td>{counter1}</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].name}
										</td>
										<td>{secondGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(thirdGroup)?.map((key) => {
							if (
								!thirdGroup[key].duty &&
								!thirdGroup[key].perfect &&
								!thirdGroup[key].violation &&
								!thirdGroup[key].sport_three &&
								!thirdGroup[key].sport_two &&
								!thirdGroup[key].study_three &&
								!thirdGroup[key].study_two &&
								!thirdGroup[key].shooting &&
								!thirdGroup[key].stepping
							) {
								counter1++
								return (
									<tr key={thirdGroup[key].name + 'b'}>
										<td>{counter1}</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].name}
										</td>
										<td>{thirdGroup[key].group}</td>
									</tr>
								)
							}
						})}
						{Object.keys(fourthGroup)?.map((key) => {
							if (
								!fourthGroup[key].duty &&
								!fourthGroup[key].perfect &&
								!fourthGroup[key].violation &&
								!fourthGroup[key].sport_three &&
								!fourthGroup[key].sport_two &&
								!fourthGroup[key].study_three &&
								!fourthGroup[key].study_two &&
								!fourthGroup[key].shooting &&
								!fourthGroup[key].stepping
							) {
								counter1++
								return (
									<tr key={fourthGroup[key].name + 'b'}>
										<td>{counter1}</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].name}
										</td>
										<td>{fourthGroup[key].group}</td>
									</tr>
								)
							}
						})}
						{Object.keys(fifthGroup)?.map((key) => {
							if (
								!fifthGroup[key].duty &&
								!fifthGroup[key].perfect &&
								!fifthGroup[key].violation &&
								!fifthGroup[key].sport_three &&
								!fifthGroup[key].sport_two &&
								!fifthGroup[key].study_three &&
								!fifthGroup[key].study_two &&
								!fifthGroup[key].shooting &&
								!fifthGroup[key].stepping
							) {
								counter1++
								return (
									<tr key={fifthGroup[key].name + 'b'}>
										<td>{counter1}</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].name}
										</td>
										<td>{fifthGroup[key].group}</td>
									</tr>
								)
							}
						})}
						{Object.keys(sixthGroup)?.map((key) => {
							if (
								!sixthGroup[key].duty &&
								!sixthGroup[key].perfect &&
								!sixthGroup[key].violation &&
								!sixthGroup[key].sport_three &&
								!sixthGroup[key].sport_two &&
								!sixthGroup[key].study_three &&
								!sixthGroup[key].study_two &&
								!sixthGroup[key].shooting &&
								!sixthGroup[key].stepping
							) {
								counter1++
								return (
									<tr key={sixthGroup[key].name + 'b'}>
										<td>{counter1}</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].name}
										</td>
										<td>{sixthGroup[key].group}</td>
									</tr>
								)
							}
						})}
						{Object.keys(seventhGroup)?.map((key) => {
							if (
								!seventhGroup[key].duty &&
								!seventhGroup[key].perfect &&
								!seventhGroup[key].violation &&
								!seventhGroup[key].sport_three &&
								!seventhGroup[key].sport_two &&
								!seventhGroup[key].study_three &&
								!seventhGroup[key].study_two &&
								!seventhGroup[key].shooting &&
								!seventhGroup[key].stepping
							) {
								counter1++
								return (
									<tr key={seventhGroup[key].name + 'b'}>
										<td>{counter1}</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].name}
										</td>
										<td>{seventhGroup[key].group}</td>
									</tr>
								)
							}
						})}
					</tbody>
				</table>
			</div>

			<div
				style={{
					marginLeft: '1rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<p>Əlaçılar</p>
				<table>
					<thead>
						<tr>
							<th>S/s</th>
							<th>Rütbəsi</th>
							<th>Soyad, ad və ata adı</th>
							<th>Taqım</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(firstGroup)?.map((key) => {
							if (
								firstGroup[key].perfect &&
								!firstGroup[key].violation &&
								!firstGroup[key].sport_three &&
								!firstGroup[key].sport_two &&
								!firstGroup[key].study_three &&
								!firstGroup[key].study_two &&
								!firstGroup[key].shooting &&
								!firstGroup[key].stepping
							) {
								counter2++
								return (
									<tr key={firstGroup[key].name + 'e'}>
										<td>{counter2}</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].name}
										</td>
										<td>{firstGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(secondGroup)?.map((key) => {
							if (
								secondGroup[key].perfect &&
								!secondGroup[key].violation &&
								!secondGroup[key].sport_three &&
								!secondGroup[key].sport_two &&
								!secondGroup[key].study_three &&
								!secondGroup[key].study_two &&
								!secondGroup[key].shooting &&
								!secondGroup[key].stepping
							) {
								counter2++
								return (
									<tr key={secondGroup[key].name + 'e'}>
										<td>{counter2}</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].name}
										</td>
										<td>{secondGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(thirdGroup)?.map((key) => {
							if (
								thirdGroup[key].perfect &&
								!thirdGroup[key].violation &&
								!thirdGroup[key].sport_three &&
								!thirdGroup[key].sport_two &&
								!thirdGroup[key].study_three &&
								!thirdGroup[key].study_two &&
								!thirdGroup[key].shooting &&
								!thirdGroup[key].stepping
							) {
								counter2++
								return (
									<tr key={thirdGroup[key].name + 'e'}>
										<td>{counter2}</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].name}
										</td>
										<td>{thirdGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(fourthGroup)?.map((key) => {
							if (
								fourthGroup[key].perfect &&
								!fourthGroup[key].violation &&
								!fourthGroup[key].sport_three &&
								!fourthGroup[key].sport_two &&
								!fourthGroup[key].study_three &&
								!fourthGroup[key].study_two &&
								!fourthGroup[key].shooting &&
								!fourthGroup[key].stepping
							) {
								counter2++
								return (
									<tr key={fourthGroup[key].name + 'e'}>
										<td>{counter2}</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].name}
										</td>
										<td>{fourthGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(fifthGroup)?.map((key) => {
							if (
								fifthGroup[key].perfect &&
								!fifthGroup[key].violation &&
								!fifthGroup[key].sport_three &&
								!fifthGroup[key].sport_two &&
								!fifthGroup[key].study_three &&
								!fifthGroup[key].study_two &&
								!fifthGroup[key].shooting &&
								!fifthGroup[key].stepping
							) {
								counter2++
								return (
									<tr key={fifthGroup[key].name + 'e'}>
										<td>{counter2}</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].name}
										</td>
										<td>{fifthGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(sixthGroup)?.map((key) => {
							if (
								sixthGroup[key].perfect &&
								!sixthGroup[key].violation &&
								!sixthGroup[key].sport_three &&
								!sixthGroup[key].sport_two &&
								!sixthGroup[key].study_three &&
								!sixthGroup[key].study_two &&
								!sixthGroup[key].shooting &&
								!sixthGroup[key].stepping
							) {
								counter2++
								return (
									<tr key={sixthGroup[key].name + 'e'}>
										<td>{counter2}</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].name}
										</td>
										<td>{sixthGroup[key].group}</td>
									</tr>
								)
							}
						})}
						{Object.keys(seventhGroup)?.map((key) => {
							if (
								seventhGroup[key].perfect &&
								!seventhGroup[key].violation &&
								!seventhGroup[key].sport_three &&
								!seventhGroup[key].sport_two &&
								!seventhGroup[key].study_three &&
								!seventhGroup[key].study_two &&
								!seventhGroup[key].shooting &&
								!seventhGroup[key].stepping
							) {
								counter2++
								return (
									<tr key={seventhGroup[key].name + 'e'}>
										<td>{counter2}</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].rank}
										</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].name}
										</td>
										<td>{seventhGroup[key].group}</td>
									</tr>
								)
							}
							return null
						})}
					</tbody>
				</table>
			</div>

			<div
				style={{
					marginLeft: '1rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<p>Tam qalanlar</p>
				<table>
					<thead>
						<tr>
							<th>S/s</th>
							<th>Soyad, ad və ata adı</th>
							<th>Taqım</th>
							<th>Məhdudiyyət səbəbi</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(firstGroup)?.map((key) => {
							if (
								firstGroup[key].violation ||
								firstGroup[key].sport_two ||
								firstGroup[key].study_two ||
								firstGroup[key].shooting ||
								firstGroup[key].stepping
							) {
								counter3++
								return (
									<tr key={firstGroup[key].name + 't'}>
										<td>{counter3}</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].name}
										</td>
										<td>{firstGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].violation
												? ' İntizam pozuntusuna yol vermişdir.'
												: null}
											{firstGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{firstGroup[key].sport_two
												? ' İdman normativlərini ödəməmişdir.'
												: null}
											{firstGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
											{firstGroup[key].study_two
												? ' Tədris olunan fəndən qeyri-kafi qiymət almışdır.'
												: null}
											{firstGroup[key].shooting
												? ' "Atəş hazırlığı" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
											{firstGroup[key].stepping
												? ' "Sıra hazırlığı" və "Nizamnamələr" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(secondGroup)?.map((key) => {
							if (
								secondGroup[key].violation ||
								secondGroup[key].sport_two ||
								secondGroup[key].study_two ||
								secondGroup[key].shooting ||
								secondGroup[key].stepping
							) {
								counter3++
								return (
									<tr key={secondGroup[key].name + 't'}>
										<td>{counter3}</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].name}
										</td>
										<td>{secondGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].violation
												? ' İntizam pozuntusuna yol vermişdir.'
												: null}
											{secondGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{secondGroup[key].sport_two
												? ' İdman normativlərini ödəməmişdir.'
												: null}
											{secondGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
											{secondGroup[key].study_two
												? ' Tədris olunan fəndən qeyri-kafi qiymət almışdır.'
												: null}
											{secondGroup[key].shooting
												? ' "Atəş hazırlığı" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
											{secondGroup[key].stepping
												? ' "Sıra hazırlığı" və "Nizamnamələr" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(thirdGroup)?.map((key) => {
							if (
								thirdGroup[key].violation ||
								thirdGroup[key].sport_two ||
								thirdGroup[key].study_two ||
								thirdGroup[key].shooting ||
								thirdGroup[key].stepping
							) {
								counter3++
								return (
									<tr key={thirdGroup[key].name + 't'}>
										<td>{counter3}</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].name}
										</td>
										<td>{thirdGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].violation
												? ' İntizam pozuntusuna yol vermişdir.'
												: null}
											{thirdGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{thirdGroup[key].sport_two
												? ' İdman normativlərini ödəməmişdir.'
												: null}
											{thirdGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
											{thirdGroup[key].study_two
												? ' Tədris olunan fəndən qeyri-kafi qiymət almışdır.'
												: null}
											{thirdGroup[key].shooting
												? ' "Atəş hazırlığı" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
											{thirdGroup[key].stepping
												? ' "Sıra hazırlığı" və "Nizamnamələr" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(fourthGroup)?.map((key) => {
							if (
								fourthGroup[key].violation ||
								fourthGroup[key].sport_two ||
								fourthGroup[key].study_two ||
								fourthGroup[key].shooting ||
								fourthGroup[key].stepping
							) {
								counter3++
								return (
									<tr key={fourthGroup[key].name + 't'}>
										<td>{counter3}</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].name}
										</td>
										<td>{fourthGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].violation
												? ' İntizam pozuntusuna yol vermişdir.'
												: null}
											{fourthGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{fourthGroup[key].sport_two
												? ' İdman normativlərini ödəməmişdir.'
												: null}
											{fourthGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
											{fourthGroup[key].study_two
												? ' Tədris olunan fəndən qeyri-kafi qiymət almışdır.'
												: null}
											{fourthGroup[key].shooting
												? ' "Atəş hazırlığı" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
											{fourthGroup[key].stepping
												? ' "Sıra hazırlığı" və "Nizamnamələr" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(fifthGroup)?.map((key) => {
							if (
								fifthGroup[key].violation ||
								fifthGroup[key].sport_two ||
								fifthGroup[key].study_two ||
								fifthGroup[key].shooting ||
								fifthGroup[key].stepping
							) {
								counter3++
								return (
									<tr key={fifthGroup[key].name + 't'}>
										<td>{counter3}</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].name}
										</td>
										<td>{fifthGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].violation
												? ' İntizam pozuntusuna yol vermişdir.'
												: null}
											{fifthGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{fifthGroup[key].sport_two
												? ' İdman normativlərini ödəməmişdir.'
												: null}
											{fifthGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
											{fifthGroup[key].study_two
												? ' Tədris olunan fəndən qeyri-kafi qiymət almışdır.'
												: null}
											{fifthGroup[key].shooting
												? ' "Atəş hazırlığı" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
											{fifthGroup[key].stepping
												? ' "Sıra hazırlığı" və "Nizamnamələr" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(sixthGroup)?.map((key) => {
							if (
								sixthGroup[key].violation ||
								sixthGroup[key].sport_two ||
								sixthGroup[key].study_two ||
								sixthGroup[key].shooting ||
								sixthGroup[key].stepping
							) {
								counter3++
								return (
									<tr key={sixthGroup[key].name + 't'}>
										<td>{counter3}</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].name}
										</td>
										<td>{sixthGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].violation
												? ' İntizam pozuntusuna yol vermişdir.'
												: null}
											{sixthGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{sixthGroup[key].sport_two
												? ' İdman normativlərini ödəməmişdir.'
												: null}
											{sixthGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
											{sixthGroup[key].study_two
												? ' Tədris olunan fəndən qeyri-kafi qiymət almışdır.'
												: null}
											{sixthGroup[key].shooting
												? ' "Atəş hazırlığı" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
											{sixthGroup[key].stepping
												? ' "Sıra hazırlığı" və "Nizamnamələr" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(seventhGroup)?.map((key) => {
							if (
								seventhGroup[key].violation ||
								seventhGroup[key].sport_two ||
								seventhGroup[key].study_two ||
								seventhGroup[key].shooting ||
								seventhGroup[key].stepping
							) {
								counter3++
								return (
									<tr key={seventhGroup[key].name + 't'}>
										<td>{counter3}</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].name}
										</td>
										<td>{seventhGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].violation
												? ' İntizam pozuntusuna yol vermişdir.'
												: null}
											{seventhGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{seventhGroup[key].sport_two
												? ' İdman normativlərini ödəməmişdir.'
												: null}
											{seventhGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
											{seventhGroup[key].study_two
												? ' Tədris olunan fəndən qeyri-kafi qiymət almışdır.'
												: null}
											{seventhGroup[key].shooting
												? ' "Atəş hazırlığı" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
											{seventhGroup[key].stepping
												? ' "Sıra hazırlığı" və "Nizamnamələr" fənnindən qeyri-kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
					</tbody>
				</table>
			</div>

			<div
				style={{
					marginLeft: '1rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<p>Kafi qalanlar</p>
				<table>
					<thead>
						<tr>
							<th>S/s</th>
							<th>Soyad, ad və ata adı</th>
							<th>Taqım</th>
							<th>Məhdudiyyət səbəbi</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(firstGroup)?.map((key) => {
							if (
								(firstGroup[key].sport_three || firstGroup[key].study_three) &&
								!firstGroup[key].violation &&
								!firstGroup[key].study_two &&
								!firstGroup[key].sport_two &&
								!firstGroup[key].shooting &&
								!firstGroup[key].stepping
							) {
								counter4++
								return (
									<tr key={firstGroup[key].name + 'k'}>
										<td>{counter4}</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].name}
										</td>
										<td>{firstGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{firstGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{firstGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(secondGroup)?.map((key) => {
							if (
								(secondGroup[key].sport_three ||
									secondGroup[key].study_three) &&
								!secondGroup[key].violation &&
								!secondGroup[key].study_two &&
								!secondGroup[key].sport_two &&
								!secondGroup[key].shooting &&
								!secondGroup[key].stepping
							) {
								counter4++
								return (
									<tr key={secondGroup[key].name + 'k'}>
										<td>{counter4}</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].name}
										</td>
										<td>{secondGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{secondGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{secondGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(thirdGroup)?.map((key) => {
							if (
								(thirdGroup[key].sport_three || thirdGroup[key].study_three) &&
								!thirdGroup[key].violation &&
								!thirdGroup[key].study_two &&
								!thirdGroup[key].sport_two &&
								!thirdGroup[key].shooting &&
								!thirdGroup[key].stepping
							) {
								counter4++
								return (
									<tr key={thirdGroup[key].name + 'k'}>
										<td>{counter4}</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].name}
										</td>
										<td>{thirdGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{thirdGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{thirdGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(fourthGroup)?.map((key) => {
							if (
								(fourthGroup[key].sport_three ||
									fourthGroup[key].study_three) &&
								!fourthGroup[key].violation &&
								!fourthGroup[key].study_two &&
								!fourthGroup[key].sport_two &&
								!fourthGroup[key].shooting &&
								!fourthGroup[key].stepping
							) {
								counter4++
								return (
									<tr key={fourthGroup[key].name + 'k'}>
										<td>{counter4}</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].name}
										</td>
										<td>{fourthGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{fourthGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{fourthGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(fifthGroup)?.map((key) => {
							if (
								(fifthGroup[key].sport_three || fifthGroup[key].study_three) &&
								!fifthGroup[key].violation &&
								!fifthGroup[key].study_two &&
								!fifthGroup[key].sport_two &&
								!fifthGroup[key].shooting &&
								!fifthGroup[key].stepping
							) {
								counter4++
								return (
									<tr key={fifthGroup[key].name + 'k'}>
										<td>{counter4}</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].name}
										</td>
										<td>{fifthGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{fifthGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{fifthGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(sixthGroup)?.map((key) => {
							if (
								(sixthGroup[key].sport_three || sixthGroup[key].study_three) &&
								!sixthGroup[key].violation &&
								!sixthGroup[key].study_two &&
								!sixthGroup[key].sport_two &&
								!sixthGroup[key].shooting &&
								!sixthGroup[key].stepping
							) {
								counter4++
								return (
									<tr key={sixthGroup[key].name + 'k'}>
										<td>{counter4}</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].name}
										</td>
										<td>{sixthGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{sixthGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{sixthGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
						{Object.keys(seventhGroup)?.map((key) => {
							if (
								(seventhGroup[key].sport_three ||
									seventhGroup[key].study_three) &&
								!seventhGroup[key].violation &&
								!seventhGroup[key].study_two &&
								!seventhGroup[key].sport_two &&
								!seventhGroup[key].shooting &&
								!seventhGroup[key].stepping
							) {
								counter4++
								return (
									<tr key={seventhGroup[key].name + 'k'}>
										<td>{counter4}</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].name}
										</td>
										<td>{seventhGroup[key].group}</td>
										<td style={{ textAlign: 'left' }}>
											{seventhGroup[key].sport_three
												? ' İdman normativlərini kafi ödəmişdir.'
												: null}
											{seventhGroup[key].study_three
												? ' Tədris olunan fəndən kafi qiymət almışdır.'
												: null}
										</td>
									</tr>
								)
							}
							return null
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default App

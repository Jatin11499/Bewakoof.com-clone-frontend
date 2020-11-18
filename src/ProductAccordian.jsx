import React from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

function ProductAccordian(props) {
    return (
        <>
            { props.genderTitle === "Men's & Women's Top Wear" && <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Gender
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li>Women</li>
                        <li>Men</li>
                    </ul>
                </AccordionDetails>

            </Accordion>}

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Category
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li>T-Shirt</li>
                        <li>Boxer</li>
                        <li>Vest</li>
                        <li>Jacket</li>
                        <li>Hoodies</li>
                        <li>Joggers</li>
                        <li>Shorts</li>
                        <li>Fleece Sweater</li>
                        <li>Pyjama</li>
                        <li>Shirt</li>
                        <li>Denim</li>
                        <li>Socks</li>
                        <li>Sweaters</li>
                        <li>Kurta</li>
                        <li>T-Shirt Combo</li>
                        <li>Full Sleeve Combo</li>
                    </ul>
                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Sizes
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li>STANDARD</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>2XL</li>
                        <li>28</li>
                        <li>30</li>
                        <li>32</li>
                        <li>34</li>
                        <li>36</li>
                        <li>38</li>
                        <li>3XL</li>
                        <li>40</li>
                        <li>42</li>
                        <li>44</li>
                        <li>46</li>
                    </ul>
                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Color
                </AccordionSummary>

                <AccordionDetails className="colors-sec">
                    <div>
                        <div className="colors" style={{backgroundColor:"black"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"blue"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"gray"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"red"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"white"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"green"}}>
                        </div>
                    </div>
                    <div>
                        <div className="colors" style={{backgroundColor:"yellow"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"purple"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"brown"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"orange"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"maroon"}}>
                        </div>
                        <div className="colors" style={{backgroundColor:"pink"}}>
                        </div>
                    </div>
                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Design
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li>Chest Printed</li>
                        <li>Plain</li>
                        <li>Printed</li>
                        <li>All Over Printed</li>
                        <li>Checked</li>
                        <li>Cut & Sew</li>
                        <li>Side Printed</li>
                    </ul>
                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Fit
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li>Regular</li>
                        <li>Slim</li>
                    </ul>
                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Sleeve
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li>Half Sleeve</li>
                        <li>Full Sleeve</li>
                        <li>Sleeveless</li>
                    </ul>
                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Neck
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li>Round Neck</li>
                        <li>Polo</li>
                        <li>Hood</li>
                        <li>Detachable Hood</li>
                        <li>Mandarin Collar</li>
                        <li>Shirt Collar</li>
                        <li>Standing Collar</li>
                        <li>Bomber</li>
                    </ul>
                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />} className="acc-title">
                Sort By
                </AccordionSummary>

                <AccordionDetails>
                    <ul class="category-list">
                        <li style={{color:"rgb(81, 204, 204)"}}>Popular</li>
                        <li style={{color:"black"}}>New</li>
                        <li style={{color:"black"}}>Price: High to Low</li>
                        <li style={{color:"black"}}>Price: Low to High</li>
                    </ul>
                </AccordionDetails>

            </Accordion>
        </>
    )
}

export default ProductAccordian;

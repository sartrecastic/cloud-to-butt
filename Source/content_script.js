walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bwhite peopleb/g, "whyte people");
	v = v.replace(/\bWhite people\b/g, "Whyte people");
	v = v.replace(/\bfree speech\b/g, "hate speech");
	v = v.replace(/\balt right\b/g, "*literally* Nazis");
	v = v.replace(/\blibtard\b/g, "ally");
	v = v.replace(/\bglobalist\b/g, "woke member of society");
	v = v.replace(/\bAlex Jones\b/g, "Basically Satan");
	v = v.replace(/\beducation\b/g, "state-run propaganda machine");
	v = v.replace(/\bTrump\b/g, "*Hitler");
	v = v.replace(/\bsavage\b/g, "Native American");
	v = v.replace(/\bcoronavirus\b/g, " ");
	v = v.replace(/\bcovid\b/g, " ");
	v = v.replace(/\bCovid19\b/g, " ");
	v = v.replace(/\bCovid\b/g, " ");
	v = v.replace(/\bcovid19\b/g, " ");
	v = v.replace(/\bTwitter\b/g, "The News");
	v = v.replace(/\bAlt left\b/g, "Comrades");
	v = v.replace(/\bAoC\b/g, "Based God");
	v = v.replace(/\bopinion\b/g, "lie");
	v = v.replace(/\bwar\b/g, "peace");
	v = v.replace(/\breasoning\b/g, "hegomontic societal norms");
	v = v.replace(/\bdefinition\b/g, "hegomontic societal norm");
	v = v.replace(/\bFacebook\b/g, "The News");
	v = v.replace(/\bmarriage\b/g, "sex slavery");
	v = v.replace(/\bgender\b/g, " ");
	v = v.replace(/\bresearch\b/g, "hegomontic societal practices");
	v = v.replace(/\bfact checking\b/g, "propoganda");
	v = v.replace(/\bgay\b/g, "happy");
	v = v.replace(/\bpostmodernism\b/g, "");
	v = v.replace(/\btechnology\b/g, "oppression methodologies");
	v = v.replace(/\bcaptialtist\b/g, "facist");
	v = v.replace(/\bquestioning\b/g, "attack on identity");
	v = v.replace(/\bsickness\b/g, "health");
	v = v.replace(/\bwar\b/g, "peace");
	v = v.replace(/\bpolice\b/g, "facist pigs");
	v = v.replace(/\bmansplain\b/g, "*literally* murder");
	v = v.replace(/\blooting\b/g, "justice");
	v = v.replace(/\bscience\b/g, "oppressive thoughts");
	v = v.replace(/\bSJW\b/g, "freedom fighter");
	v = v.replace(/\bterrorism\b/g, " ");

	textNode.nodeValue = v;
}



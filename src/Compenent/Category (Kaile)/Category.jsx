import React, { useState, useEffect } from 'react';
import './Category.css';
import { useLocation } from 'react-router-dom';
import temp_pic from '../../assets/Clean Water Initiatives.png';
import temp_pic2 from '../../assets/Education for Underserved Communities.png';
import project_pic1 from '../../assets/Etherscanmainpage-dark.png';
import project_pic2 from '../../assets/Etherscanmainpage-dim.png';
import project_pic3 from '../../assets/Etherscanmainpage-light.png';
import project_pic4 from '../../assets/Security.png';
import project_pic5 from '../../assets/Transparency.png';
import project_pic6 from '../../assets/backbutton.png';

const Category = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || 'financial';

  const [bgImage, setBgImage] = useState(temp_pic);
  const [title, setTitle] = useState('Financial Aids');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id. Mauris vehicula vitae enim eget eleifend. Etiam malesuada vestibulum odio, non laoreet erat vulputate eu. Nam placerat egestas tincidunt. Quisque suscipit ante purus, eget finibus tortor molestie ac. Cras gravida luctus viverra.');
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const [projects, setProjects] = useState([
    {
      img: project_pic1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
    },
    {
      img: project_pic2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
    },
    {
      img: project_pic3,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
    }
  ]);

  useEffect(() => {
    switch (initialCategory) {
      case 'education':
        handleSubcategoryClick(
          temp_pic2, 
          'Education', 
          'Curabitur volutpat libero at diam consequat, ac convallis eros fringilla. Aenean eget sapien arcu. Integer vehicula orci in libero egestas efficitur. Cras tempus suscipit ex, a fermentum velit dictum id.', 
          'education',
          [
            {
              img: project_pic4,
              title: 'Project 4',
              description: 'Curabitur volutpat libero at diam consequat, ac convallis eros fringilla.'
            },
            {
              img: project_pic5,
              title: 'Project 5',
              description: 'Aenean eget sapien arcu. Integer vehicula orci in libero egestas efficitur.'
            },
            {
              img: project_pic6,
              title: 'Project 6',
              description: 'Cras tempus suscipit ex, a fermentum velit dictum id.'
            }
          ]
        );
        break;
      case 'public':
        handleSubcategoryClick(
          temp_pic, 
          'Public', 
          'Praesent facilisis orci in urna dapibus, at facilisis metus dapibus. Quisque at nunc non sapien vestibulum varius a sed lorem. Sed nec ante justo.', 
          'public',
          [
            {
              img: project_pic1,
              title: 'Project 1',
              description: 'Praesent facilisis orci in urna dapibus, at facilisis metus dapibus.'
            },
            {
              img: project_pic2,
              title: 'Project 2',
              description: 'Quisque at nunc non sapien vestibulum varius a sed lorem.'
            },
            {
              img: project_pic3,
              title: 'Project 3',
              description: 'Sed nec ante justo. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
            }
          ]
        );
        break;
      default:
        handleSubcategoryClick(
          temp_pic, 
          'Financial Aids', 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id. Mauris vehicula vitae enim eget eleifend. Etiam malesuada vestibulum odio, non laoreet erat vulputate eu. Nam placerat egestas tincidunt. Quisque suscipit ante purus, eget finibus tortor molestie ac. Cras gravida luctus viverra.', 
          'financial',
          [
            {
              img: project_pic1,
              title: 'Project 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
            },
            {
              img: project_pic2,
              title: 'Project 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
            },
            {
              img: project_pic3,
              title: 'Project 3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
            }
          ]
        );
        break;
    }
  }, [initialCategory]);

  const handleSubcategoryClick = (image, newTitle, newDescription, category, newProjects) => {
    setBgImage(image); 
    setTitle(newTitle);
    setDescription(newDescription); 
    setActiveCategory(category); 
    setProjects(newProjects);
  };

  return (
    <div>
      <div className='category' style={{ backgroundImage: `linear-gradient(rgba(41, 41, 41, 0.7), rgba(81, 81, 81, 0.7)), url(${bgImage})` }}>
        <div className='category-title'>{title}</div>
        <div className='category-description'>
          {description}
        </div>
      </div>

      <div className="sub-category-bar">
        <div 
          className={`sub-category-item ${activeCategory === 'financial' ? 'active' : ''}`} 
          onClick={() => handleSubcategoryClick(
            temp_pic, 
            'Financial Aids', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id. Mauris vehicula vitae enim eget eleifend. Etiam malesuada vestibulum odio, non laoreet erat vulputate eu. Nam placerat egestas tincidunt. Quisque suscipit ante purus, eget finibus tortor molestie ac. Cras gravida luctus viverra.', 
            'financial',
            [
              {
                img: project_pic1,
                title: 'Project 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
              },
              {
                img: project_pic2,
                title: 'Project 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
              },
              {
                img: project_pic3,
                title: 'Project 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
              }
            ]
          )}
        >
          <h3>Financial</h3>
        </div>
        <div 
          className={`sub-category-item ${activeCategory === 'education' ? 'active' : ''}`} 
          onClick={() => handleSubcategoryClick(
            temp_pic2, 
            'Education', 
            'Curabitur volutpat libero at diam consequat, ac convallis eros fringilla. Aenean eget sapien arcu. Integer vehicula orci in libero egestas efficitur. Cras tempus suscipit ex, a fermentum velit dictum id.', 
            'education',
            [
              {
                img: project_pic4,
                title: 'Project 4',
                description: 'Curabitur volutpat libero at diam consequat, ac convallis eros fringilla.'
              },
              {
                img: project_pic5,
                title: 'Project 5',
                description: 'Aenean eget sapien arcu. Integer vehicula orci in libero egestas efficitur.'
              },
              {
                img: project_pic6,
                title: 'Project 6',
                description: 'Cras tempus suscipit ex, a fermentum velit dictum id.'
              }
            ]
          )}
        >
          <h3>Education</h3>
        </div>
        <div 
          className={`sub-category-item ${activeCategory === 'public' ? 'active' : ''}`} 
          onClick={() => handleSubcategoryClick(
            temp_pic, 
            'Public', 
            'Praesent facilisis orci in urna dapibus, at facilisis metus dapibus. Quisque at nunc non sapien vestibulum varius a sed lorem. Sed nec ante justo.', 
            'public',
            [
              {
                img: project_pic1,
                title: 'Project 1',
                description: 'Praesent facilisis orci in urna dapibus, at facilisis metus dapibus.'
              },
              {
                img: project_pic2,
                title: 'Project 2',
                description: 'Quisque at nunc non sapien vestibulum varius a sed lorem.'
              },
              {
                img: project_pic3,
                title: 'Project 3',
                description: 'Sed nec ante justo. Aenean venenatis placerat nisi, feugiat pharetra quam fringilla id.'
              }
            ]
          )}
        >
          <h3>Public</h3>
        </div>
      </div>

      <div className='donate-now'>
        <h2>Donate Now</h2>
      </div>

      <div className='project-financial'>
        {projects.map((project, index) => (
          <div key={index} className={`pf${index + 1}`}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="overlay">
              <span>See More Details</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

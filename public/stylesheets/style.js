import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    padding: [{ unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }],
    font: [{ unit: 'px', value: 14 }, { unit: 'string', value: '"Lucida' }, { unit: 'string', value: 'Grande",' }, { unit: 'string', value: 'Helvetica,' }, { unit: 'string', value: 'Arial,' }, { unit: 'string', value: 'sans-serif' }],
    backgroundImage: 'url('../diamond-background.jpg')',
    paddingLeft: [{ unit: 'px', value: 50 }],
    paddingRight: [{ unit: 'px', value: 50 }]
  },
  'a': {
    color: '#00B7FF'
  },
  'em-text-color': {
    color: '#ffffff',
    fontStyle: 'italic'
  },
  'blog-area': {
    backgroundColor: '#ffffff',
    padding: [{ unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }],
    borderRadius: '20px 20px 0px 0px'
  },
  'title-font': {
    color: 'orange',
    fontFamily: ''Cinzel', serif',
    fontWeight: '700',
    fontSize: [{ unit: 'px', value: 40 }]
  },
  'sub-title': {
    color: '#5D6E6E',
    fontStyle: 'italic',
    fontWeight: 'lighter'
  },
  date: {
    color: 'orange'
  }
});

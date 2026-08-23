import React from 'react';
const LABEL_27814 = 'component_27814';
export function Component27814({ value = 27814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27814, 'data-value': derived.doubled }, children);
}
export default Component27814;

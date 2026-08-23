import React from 'react';
const LABEL_2981 = 'component_2981';
export function Component2981({ value = 2981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2981, 'data-value': derived.doubled }, children);
}
export default Component2981;

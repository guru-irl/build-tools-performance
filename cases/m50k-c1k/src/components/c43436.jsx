import React from 'react';
const LABEL_43436 = 'component_43436';
export function Component43436({ value = 43436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43436, 'data-value': derived.doubled }, children);
}
export default Component43436;

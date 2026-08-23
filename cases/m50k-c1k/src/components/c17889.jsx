import React from 'react';
const LABEL_17889 = 'component_17889';
export function Component17889({ value = 17889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17889, 'data-value': derived.doubled }, children);
}
export default Component17889;

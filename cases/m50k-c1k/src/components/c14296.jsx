import React from 'react';
const LABEL_14296 = 'component_14296';
export function Component14296({ value = 14296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14296, 'data-value': derived.doubled }, children);
}
export default Component14296;

import React from 'react';
const LABEL_36566 = 'component_36566';
export function Component36566({ value = 36566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36566, 'data-value': derived.doubled }, children);
}
export default Component36566;

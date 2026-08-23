import React from 'react';
const LABEL_5343 = 'component_5343';
export function Component5343({ value = 5343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5343, 'data-value': derived.doubled }, children);
}
export default Component5343;

import React from 'react';
const LABEL_3408 = 'component_3408';
export function Component3408({ value = 3408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3408, 'data-value': derived.doubled }, children);
}
export default Component3408;

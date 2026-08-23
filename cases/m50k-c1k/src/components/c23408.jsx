import React from 'react';
const LABEL_23408 = 'component_23408';
export function Component23408({ value = 23408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23408, 'data-value': derived.doubled }, children);
}
export default Component23408;

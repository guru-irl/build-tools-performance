import React from 'react';
const LABEL_36408 = 'component_36408';
export function Component36408({ value = 36408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36408, 'data-value': derived.doubled }, children);
}
export default Component36408;

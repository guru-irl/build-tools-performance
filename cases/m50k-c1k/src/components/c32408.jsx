import React from 'react';
const LABEL_32408 = 'component_32408';
export function Component32408({ value = 32408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32408, 'data-value': derived.doubled }, children);
}
export default Component32408;

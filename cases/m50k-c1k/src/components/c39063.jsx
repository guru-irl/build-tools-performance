import React from 'react';
const LABEL_39063 = 'component_39063';
export function Component39063({ value = 39063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39063, 'data-value': derived.doubled }, children);
}
export default Component39063;

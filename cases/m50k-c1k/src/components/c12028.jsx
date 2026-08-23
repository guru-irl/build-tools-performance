import React from 'react';
const LABEL_12028 = 'component_12028';
export function Component12028({ value = 12028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12028, 'data-value': derived.doubled }, children);
}
export default Component12028;

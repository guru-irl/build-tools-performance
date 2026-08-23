import React from 'react';
const LABEL_39248 = 'component_39248';
export function Component39248({ value = 39248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39248, 'data-value': derived.doubled }, children);
}
export default Component39248;

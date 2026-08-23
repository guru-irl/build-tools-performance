import React from 'react';
const LABEL_39468 = 'component_39468';
export function Component39468({ value = 39468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39468, 'data-value': derived.doubled }, children);
}
export default Component39468;

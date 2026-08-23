import React from 'react';
const LABEL_39371 = 'component_39371';
export function Component39371({ value = 39371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39371, 'data-value': derived.doubled }, children);
}
export default Component39371;

import React from 'react';
const LABEL_39668 = 'component_39668';
export function Component39668({ value = 39668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39668, 'data-value': derived.doubled }, children);
}
export default Component39668;

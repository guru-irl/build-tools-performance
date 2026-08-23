import React from 'react';
const LABEL_39436 = 'component_39436';
export function Component39436({ value = 39436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39436, 'data-value': derived.doubled }, children);
}
export default Component39436;

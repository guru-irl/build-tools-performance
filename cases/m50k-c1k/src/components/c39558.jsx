import React from 'react';
const LABEL_39558 = 'component_39558';
export function Component39558({ value = 39558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39558, 'data-value': derived.doubled }, children);
}
export default Component39558;

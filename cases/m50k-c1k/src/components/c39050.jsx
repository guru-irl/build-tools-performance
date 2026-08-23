import React from 'react';
const LABEL_39050 = 'component_39050';
export function Component39050({ value = 39050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39050, 'data-value': derived.doubled }, children);
}
export default Component39050;

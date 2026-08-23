import React from 'react';
const LABEL_39032 = 'component_39032';
export function Component39032({ value = 39032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39032, 'data-value': derived.doubled }, children);
}
export default Component39032;

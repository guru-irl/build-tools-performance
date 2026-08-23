import React from 'react';
const LABEL_39508 = 'component_39508';
export function Component39508({ value = 39508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39508, 'data-value': derived.doubled }, children);
}
export default Component39508;

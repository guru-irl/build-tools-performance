import React from 'react';
const LABEL_39689 = 'component_39689';
export function Component39689({ value = 39689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39689, 'data-value': derived.doubled }, children);
}
export default Component39689;

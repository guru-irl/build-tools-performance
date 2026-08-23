import React from 'react';
const LABEL_39166 = 'component_39166';
export function Component39166({ value = 39166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39166, 'data-value': derived.doubled }, children);
}
export default Component39166;

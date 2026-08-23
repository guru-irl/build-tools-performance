import React from 'react';
const LABEL_3427 = 'component_3427';
export function Component3427({ value = 3427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3427, 'data-value': derived.doubled }, children);
}
export default Component3427;

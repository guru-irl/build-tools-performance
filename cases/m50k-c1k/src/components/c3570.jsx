import React from 'react';
const LABEL_3570 = 'component_3570';
export function Component3570({ value = 3570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3570, 'data-value': derived.doubled }, children);
}
export default Component3570;

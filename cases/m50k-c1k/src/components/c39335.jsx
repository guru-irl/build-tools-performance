import React from 'react';
const LABEL_39335 = 'component_39335';
export function Component39335({ value = 39335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39335, 'data-value': derived.doubled }, children);
}
export default Component39335;

import React from 'react';
const LABEL_39570 = 'component_39570';
export function Component39570({ value = 39570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39570, 'data-value': derived.doubled }, children);
}
export default Component39570;

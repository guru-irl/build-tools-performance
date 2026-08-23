import React from 'react';
const LABEL_39227 = 'component_39227';
export function Component39227({ value = 39227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39227, 'data-value': derived.doubled }, children);
}
export default Component39227;

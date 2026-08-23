import React from 'react';
const LABEL_39150 = 'component_39150';
export function Component39150({ value = 39150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39150, 'data-value': derived.doubled }, children);
}
export default Component39150;

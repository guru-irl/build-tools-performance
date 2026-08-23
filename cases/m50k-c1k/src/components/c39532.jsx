import React from 'react';
const LABEL_39532 = 'component_39532';
export function Component39532({ value = 39532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39532, 'data-value': derived.doubled }, children);
}
export default Component39532;

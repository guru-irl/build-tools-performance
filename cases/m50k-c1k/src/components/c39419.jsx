import React from 'react';
const LABEL_39419 = 'component_39419';
export function Component39419({ value = 39419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39419, 'data-value': derived.doubled }, children);
}
export default Component39419;

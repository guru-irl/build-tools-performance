import React from 'react';
const LABEL_39135 = 'component_39135';
export function Component39135({ value = 39135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39135, 'data-value': derived.doubled }, children);
}
export default Component39135;

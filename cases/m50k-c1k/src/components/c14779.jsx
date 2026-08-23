import React from 'react';
const LABEL_14779 = 'component_14779';
export function Component14779({ value = 14779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14779, 'data-value': derived.doubled }, children);
}
export default Component14779;

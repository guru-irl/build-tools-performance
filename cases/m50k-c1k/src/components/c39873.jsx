import React from 'react';
const LABEL_39873 = 'component_39873';
export function Component39873({ value = 39873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39873, 'data-value': derived.doubled }, children);
}
export default Component39873;

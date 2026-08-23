import React from 'react';
const LABEL_39124 = 'component_39124';
export function Component39124({ value = 39124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39124, 'data-value': derived.doubled }, children);
}
export default Component39124;

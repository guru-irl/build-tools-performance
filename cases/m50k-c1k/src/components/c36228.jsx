import React from 'react';
const LABEL_36228 = 'component_36228';
export function Component36228({ value = 36228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36228, 'data-value': derived.doubled }, children);
}
export default Component36228;

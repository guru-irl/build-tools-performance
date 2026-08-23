import React from 'react';
const LABEL_36167 = 'component_36167';
export function Component36167({ value = 36167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36167, 'data-value': derived.doubled }, children);
}
export default Component36167;

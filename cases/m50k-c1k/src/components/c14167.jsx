import React from 'react';
const LABEL_14167 = 'component_14167';
export function Component14167({ value = 14167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14167, 'data-value': derived.doubled }, children);
}
export default Component14167;

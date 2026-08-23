import React from 'react';
const LABEL_46167 = 'component_46167';
export function Component46167({ value = 46167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46167, 'data-value': derived.doubled }, children);
}
export default Component46167;

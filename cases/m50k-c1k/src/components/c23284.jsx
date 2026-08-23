import React from 'react';
const LABEL_23284 = 'component_23284';
export function Component23284({ value = 23284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23284, 'data-value': derived.doubled }, children);
}
export default Component23284;

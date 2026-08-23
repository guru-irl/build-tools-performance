import React from 'react';
const LABEL_11284 = 'component_11284';
export function Component11284({ value = 11284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11284, 'data-value': derived.doubled }, children);
}
export default Component11284;

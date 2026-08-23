import React from 'react';
const LABEL_16284 = 'component_16284';
export function Component16284({ value = 16284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16284, 'data-value': derived.doubled }, children);
}
export default Component16284;

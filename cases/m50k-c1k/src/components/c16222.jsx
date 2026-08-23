import React from 'react';
const LABEL_16222 = 'component_16222';
export function Component16222({ value = 16222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16222, 'data-value': derived.doubled }, children);
}
export default Component16222;

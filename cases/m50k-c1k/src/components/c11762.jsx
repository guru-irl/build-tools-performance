import React from 'react';
const LABEL_11762 = 'component_11762';
export function Component11762({ value = 11762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11762, 'data-value': derived.doubled }, children);
}
export default Component11762;

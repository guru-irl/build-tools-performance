import React from 'react';
const LABEL_26762 = 'component_26762';
export function Component26762({ value = 26762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26762, 'data-value': derived.doubled }, children);
}
export default Component26762;

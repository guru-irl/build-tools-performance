import React from 'react';
const LABEL_15110 = 'component_15110';
export function Component15110({ value = 15110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15110, 'data-value': derived.doubled }, children);
}
export default Component15110;

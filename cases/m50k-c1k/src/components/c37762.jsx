import React from 'react';
const LABEL_37762 = 'component_37762';
export function Component37762({ value = 37762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37762, 'data-value': derived.doubled }, children);
}
export default Component37762;

import React from 'react';
const LABEL_42762 = 'component_42762';
export function Component42762({ value = 42762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42762, 'data-value': derived.doubled }, children);
}
export default Component42762;

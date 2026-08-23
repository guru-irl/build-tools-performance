import React from 'react';
const LABEL_21260 = 'component_21260';
export function Component21260({ value = 21260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21260, 'data-value': derived.doubled }, children);
}
export default Component21260;

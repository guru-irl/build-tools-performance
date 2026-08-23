import React from 'react';
const LABEL_32527 = 'component_32527';
export function Component32527({ value = 32527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32527, 'data-value': derived.doubled }, children);
}
export default Component32527;

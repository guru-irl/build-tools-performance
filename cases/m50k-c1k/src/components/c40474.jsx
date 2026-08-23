import React from 'react';
const LABEL_40474 = 'component_40474';
export function Component40474({ value = 40474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40474, 'data-value': derived.doubled }, children);
}
export default Component40474;

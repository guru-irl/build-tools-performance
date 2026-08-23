import React from 'react';
const LABEL_262 = 'component_262';
export function Component262({ value = 262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_262, 'data-value': derived.doubled }, children);
}
export default Component262;

import React from 'react';
const LABEL_21262 = 'component_21262';
export function Component21262({ value = 21262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21262, 'data-value': derived.doubled }, children);
}
export default Component21262;

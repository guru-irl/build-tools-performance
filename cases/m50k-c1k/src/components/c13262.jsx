import React from 'react';
const LABEL_13262 = 'component_13262';
export function Component13262({ value = 13262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13262, 'data-value': derived.doubled }, children);
}
export default Component13262;

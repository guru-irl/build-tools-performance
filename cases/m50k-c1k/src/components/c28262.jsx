import React from 'react';
const LABEL_28262 = 'component_28262';
export function Component28262({ value = 28262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28262, 'data-value': derived.doubled }, children);
}
export default Component28262;

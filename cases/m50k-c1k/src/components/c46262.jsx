import React from 'react';
const LABEL_46262 = 'component_46262';
export function Component46262({ value = 46262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46262, 'data-value': derived.doubled }, children);
}
export default Component46262;

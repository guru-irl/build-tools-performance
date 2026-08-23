import React from 'react';
const LABEL_10262 = 'component_10262';
export function Component10262({ value = 10262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10262, 'data-value': derived.doubled }, children);
}
export default Component10262;

import React from 'react';
const LABEL_35262 = 'component_35262';
export function Component35262({ value = 35262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35262, 'data-value': derived.doubled }, children);
}
export default Component35262;

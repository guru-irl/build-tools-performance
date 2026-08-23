import React from 'react';
const LABEL_10009 = 'component_10009';
export function Component10009({ value = 10009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10009, 'data-value': derived.doubled }, children);
}
export default Component10009;

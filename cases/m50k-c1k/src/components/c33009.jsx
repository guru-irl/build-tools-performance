import React from 'react';
const LABEL_33009 = 'component_33009';
export function Component33009({ value = 33009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33009, 'data-value': derived.doubled }, children);
}
export default Component33009;

import React from 'react';
const LABEL_34009 = 'component_34009';
export function Component34009({ value = 34009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34009, 'data-value': derived.doubled }, children);
}
export default Component34009;

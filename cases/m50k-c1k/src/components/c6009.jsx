import React from 'react';
const LABEL_6009 = 'component_6009';
export function Component6009({ value = 6009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6009, 'data-value': derived.doubled }, children);
}
export default Component6009;

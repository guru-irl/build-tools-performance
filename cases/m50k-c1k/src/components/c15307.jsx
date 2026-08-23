import React from 'react';
const LABEL_15307 = 'component_15307';
export function Component15307({ value = 15307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15307, 'data-value': derived.doubled }, children);
}
export default Component15307;

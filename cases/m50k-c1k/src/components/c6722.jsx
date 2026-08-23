import React from 'react';
const LABEL_6722 = 'component_6722';
export function Component6722({ value = 6722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6722, 'data-value': derived.doubled }, children);
}
export default Component6722;

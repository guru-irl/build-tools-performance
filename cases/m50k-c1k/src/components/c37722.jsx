import React from 'react';
const LABEL_37722 = 'component_37722';
export function Component37722({ value = 37722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37722, 'data-value': derived.doubled }, children);
}
export default Component37722;

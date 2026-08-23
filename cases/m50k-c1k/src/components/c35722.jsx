import React from 'react';
const LABEL_35722 = 'component_35722';
export function Component35722({ value = 35722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35722, 'data-value': derived.doubled }, children);
}
export default Component35722;

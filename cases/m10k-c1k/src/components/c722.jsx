import React from 'react';
const LABEL_722 = 'component_722';
export function Component722({ value = 722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_722, 'data-value': derived.doubled }, children);
}
export default Component722;

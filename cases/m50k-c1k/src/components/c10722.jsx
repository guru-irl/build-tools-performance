import React from 'react';
const LABEL_10722 = 'component_10722';
export function Component10722({ value = 10722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10722, 'data-value': derived.doubled }, children);
}
export default Component10722;

import React from 'react';
const LABEL_8722 = 'component_8722';
export function Component8722({ value = 8722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8722, 'data-value': derived.doubled }, children);
}
export default Component8722;

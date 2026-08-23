import React from 'react';
const LABEL_46722 = 'component_46722';
export function Component46722({ value = 46722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46722, 'data-value': derived.doubled }, children);
}
export default Component46722;

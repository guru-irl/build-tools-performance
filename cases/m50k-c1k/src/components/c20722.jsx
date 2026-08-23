import React from 'react';
const LABEL_20722 = 'component_20722';
export function Component20722({ value = 20722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20722, 'data-value': derived.doubled }, children);
}
export default Component20722;

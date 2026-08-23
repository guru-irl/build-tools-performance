import React from 'react';
const LABEL_5722 = 'component_5722';
export function Component5722({ value = 5722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5722, 'data-value': derived.doubled }, children);
}
export default Component5722;

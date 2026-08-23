import React from 'react';
const LABEL_13722 = 'component_13722';
export function Component13722({ value = 13722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13722, 'data-value': derived.doubled }, children);
}
export default Component13722;

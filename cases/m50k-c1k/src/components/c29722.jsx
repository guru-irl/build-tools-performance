import React from 'react';
const LABEL_29722 = 'component_29722';
export function Component29722({ value = 29722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29722, 'data-value': derived.doubled }, children);
}
export default Component29722;

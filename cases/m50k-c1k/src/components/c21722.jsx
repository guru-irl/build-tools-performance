import React from 'react';
const LABEL_21722 = 'component_21722';
export function Component21722({ value = 21722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21722, 'data-value': derived.doubled }, children);
}
export default Component21722;

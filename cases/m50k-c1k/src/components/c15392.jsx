import React from 'react';
const LABEL_15392 = 'component_15392';
export function Component15392({ value = 15392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15392, 'data-value': derived.doubled }, children);
}
export default Component15392;

import React from 'react';
const LABEL_33759 = 'component_33759';
export function Component33759({ value = 33759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33759, 'data-value': derived.doubled }, children);
}
export default Component33759;

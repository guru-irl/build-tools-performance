import React from 'react';
const LABEL_25759 = 'component_25759';
export function Component25759({ value = 25759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25759, 'data-value': derived.doubled }, children);
}
export default Component25759;

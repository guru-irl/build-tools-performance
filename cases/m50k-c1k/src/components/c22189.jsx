import React from 'react';
const LABEL_22189 = 'component_22189';
export function Component22189({ value = 22189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22189, 'data-value': derived.doubled }, children);
}
export default Component22189;

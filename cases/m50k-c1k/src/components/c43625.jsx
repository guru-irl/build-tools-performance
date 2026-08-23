import React from 'react';
const LABEL_43625 = 'component_43625';
export function Component43625({ value = 43625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43625, 'data-value': derived.doubled }, children);
}
export default Component43625;

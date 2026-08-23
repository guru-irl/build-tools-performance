import React from 'react';
const LABEL_43350 = 'component_43350';
export function Component43350({ value = 43350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43350, 'data-value': derived.doubled }, children);
}
export default Component43350;

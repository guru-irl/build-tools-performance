import React from 'react';
const LABEL_43905 = 'component_43905';
export function Component43905({ value = 43905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43905, 'data-value': derived.doubled }, children);
}
export default Component43905;

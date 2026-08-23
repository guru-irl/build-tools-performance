import React from 'react';
const LABEL_43606 = 'component_43606';
export function Component43606({ value = 43606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43606, 'data-value': derived.doubled }, children);
}
export default Component43606;

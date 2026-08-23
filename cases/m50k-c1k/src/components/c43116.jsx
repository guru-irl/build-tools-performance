import React from 'react';
const LABEL_43116 = 'component_43116';
export function Component43116({ value = 43116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43116, 'data-value': derived.doubled }, children);
}
export default Component43116;

import React from 'react';
const LABEL_43681 = 'component_43681';
export function Component43681({ value = 43681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43681, 'data-value': derived.doubled }, children);
}
export default Component43681;

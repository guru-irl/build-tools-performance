import React from 'react';
const LABEL_43803 = 'component_43803';
export function Component43803({ value = 43803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43803, 'data-value': derived.doubled }, children);
}
export default Component43803;

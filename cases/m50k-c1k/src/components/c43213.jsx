import React from 'react';
const LABEL_43213 = 'component_43213';
export function Component43213({ value = 43213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43213, 'data-value': derived.doubled }, children);
}
export default Component43213;

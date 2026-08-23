import React from 'react';
const LABEL_43491 = 'component_43491';
export function Component43491({ value = 43491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43491, 'data-value': derived.doubled }, children);
}
export default Component43491;

import React from 'react';
const LABEL_43198 = 'component_43198';
export function Component43198({ value = 43198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43198, 'data-value': derived.doubled }, children);
}
export default Component43198;

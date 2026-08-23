import React from 'react';
const LABEL_43021 = 'component_43021';
export function Component43021({ value = 43021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43021, 'data-value': derived.doubled }, children);
}
export default Component43021;

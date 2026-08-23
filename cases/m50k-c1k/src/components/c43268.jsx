import React from 'react';
const LABEL_43268 = 'component_43268';
export function Component43268({ value = 43268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43268, 'data-value': derived.doubled }, children);
}
export default Component43268;

import React from 'react';
const LABEL_43858 = 'component_43858';
export function Component43858({ value = 43858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43858, 'data-value': derived.doubled }, children);
}
export default Component43858;

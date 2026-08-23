import React from 'react';
const LABEL_43426 = 'component_43426';
export function Component43426({ value = 43426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43426, 'data-value': derived.doubled }, children);
}
export default Component43426;

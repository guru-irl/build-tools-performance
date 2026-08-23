import React from 'react';
const LABEL_43148 = 'component_43148';
export function Component43148({ value = 43148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43148, 'data-value': derived.doubled }, children);
}
export default Component43148;

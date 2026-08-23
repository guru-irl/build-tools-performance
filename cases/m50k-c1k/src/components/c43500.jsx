import React from 'react';
const LABEL_43500 = 'component_43500';
export function Component43500({ value = 43500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43500, 'data-value': derived.doubled }, children);
}
export default Component43500;

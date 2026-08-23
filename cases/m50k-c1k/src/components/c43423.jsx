import React from 'react';
const LABEL_43423 = 'component_43423';
export function Component43423({ value = 43423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43423, 'data-value': derived.doubled }, children);
}
export default Component43423;

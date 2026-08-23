import React from 'react';
const LABEL_35034 = 'component_35034';
export function Component35034({ value = 35034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35034, 'data-value': derived.doubled }, children);
}
export default Component35034;

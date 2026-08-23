import React from 'react';
const LABEL_43574 = 'component_43574';
export function Component43574({ value = 43574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43574, 'data-value': derived.doubled }, children);
}
export default Component43574;

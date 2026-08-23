import React from 'react';
const LABEL_43221 = 'component_43221';
export function Component43221({ value = 43221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43221, 'data-value': derived.doubled }, children);
}
export default Component43221;

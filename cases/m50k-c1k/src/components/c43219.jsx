import React from 'react';
const LABEL_43219 = 'component_43219';
export function Component43219({ value = 43219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43219, 'data-value': derived.doubled }, children);
}
export default Component43219;

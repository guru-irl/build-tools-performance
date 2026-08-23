import React from 'react';
const LABEL_43189 = 'component_43189';
export function Component43189({ value = 43189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43189, 'data-value': derived.doubled }, children);
}
export default Component43189;

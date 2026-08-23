import React from 'react';
const LABEL_43139 = 'component_43139';
export function Component43139({ value = 43139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43139, 'data-value': derived.doubled }, children);
}
export default Component43139;

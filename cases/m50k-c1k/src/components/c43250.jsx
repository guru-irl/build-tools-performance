import React from 'react';
const LABEL_43250 = 'component_43250';
export function Component43250({ value = 43250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43250, 'data-value': derived.doubled }, children);
}
export default Component43250;

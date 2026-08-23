import React from 'react';
const LABEL_43104 = 'component_43104';
export function Component43104({ value = 43104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43104, 'data-value': derived.doubled }, children);
}
export default Component43104;

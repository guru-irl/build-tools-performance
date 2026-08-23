import React from 'react';
const LABEL_43106 = 'component_43106';
export function Component43106({ value = 43106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43106, 'data-value': derived.doubled }, children);
}
export default Component43106;

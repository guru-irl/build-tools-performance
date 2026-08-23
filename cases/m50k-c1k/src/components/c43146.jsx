import React from 'react';
const LABEL_43146 = 'component_43146';
export function Component43146({ value = 43146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43146, 'data-value': derived.doubled }, children);
}
export default Component43146;

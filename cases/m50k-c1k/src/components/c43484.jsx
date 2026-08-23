import React from 'react';
const LABEL_43484 = 'component_43484';
export function Component43484({ value = 43484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43484, 'data-value': derived.doubled }, children);
}
export default Component43484;

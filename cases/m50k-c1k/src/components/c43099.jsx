import React from 'react';
const LABEL_43099 = 'component_43099';
export function Component43099({ value = 43099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43099, 'data-value': derived.doubled }, children);
}
export default Component43099;

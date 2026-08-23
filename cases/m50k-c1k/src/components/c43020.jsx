import React from 'react';
const LABEL_43020 = 'component_43020';
export function Component43020({ value = 43020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43020, 'data-value': derived.doubled }, children);
}
export default Component43020;

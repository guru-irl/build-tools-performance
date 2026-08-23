import React from 'react';
const LABEL_43044 = 'component_43044';
export function Component43044({ value = 43044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43044, 'data-value': derived.doubled }, children);
}
export default Component43044;

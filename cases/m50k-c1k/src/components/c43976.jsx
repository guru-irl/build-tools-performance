import React from 'react';
const LABEL_43976 = 'component_43976';
export function Component43976({ value = 43976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43976, 'data-value': derived.doubled }, children);
}
export default Component43976;

import React from 'react';
const LABEL_43078 = 'component_43078';
export function Component43078({ value = 43078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43078, 'data-value': derived.doubled }, children);
}
export default Component43078;

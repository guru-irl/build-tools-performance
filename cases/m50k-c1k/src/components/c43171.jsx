import React from 'react';
const LABEL_43171 = 'component_43171';
export function Component43171({ value = 43171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43171, 'data-value': derived.doubled }, children);
}
export default Component43171;

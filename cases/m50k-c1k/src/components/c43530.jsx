import React from 'react';
const LABEL_43530 = 'component_43530';
export function Component43530({ value = 43530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43530, 'data-value': derived.doubled }, children);
}
export default Component43530;

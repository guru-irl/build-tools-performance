import React from 'react';
const LABEL_43076 = 'component_43076';
export function Component43076({ value = 43076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43076, 'data-value': derived.doubled }, children);
}
export default Component43076;

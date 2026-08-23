import React from 'react';
const LABEL_43062 = 'component_43062';
export function Component43062({ value = 43062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43062, 'data-value': derived.doubled }, children);
}
export default Component43062;

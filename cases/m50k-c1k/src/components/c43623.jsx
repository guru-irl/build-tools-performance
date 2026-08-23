import React from 'react';
const LABEL_43623 = 'component_43623';
export function Component43623({ value = 43623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43623, 'data-value': derived.doubled }, children);
}
export default Component43623;

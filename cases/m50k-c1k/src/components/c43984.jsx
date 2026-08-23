import React from 'react';
const LABEL_43984 = 'component_43984';
export function Component43984({ value = 43984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43984, 'data-value': derived.doubled }, children);
}
export default Component43984;

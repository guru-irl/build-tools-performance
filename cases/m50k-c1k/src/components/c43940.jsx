import React from 'react';
const LABEL_43940 = 'component_43940';
export function Component43940({ value = 43940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43940, 'data-value': derived.doubled }, children);
}
export default Component43940;

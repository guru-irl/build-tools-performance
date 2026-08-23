import React from 'react';
const LABEL_43759 = 'component_43759';
export function Component43759({ value = 43759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43759, 'data-value': derived.doubled }, children);
}
export default Component43759;

import React from 'react';
const LABEL_43729 = 'component_43729';
export function Component43729({ value = 43729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43729, 'data-value': derived.doubled }, children);
}
export default Component43729;

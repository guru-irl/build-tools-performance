import React from 'react';
const LABEL_18858 = 'component_18858';
export function Component18858({ value = 18858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18858, 'data-value': derived.doubled }, children);
}
export default Component18858;

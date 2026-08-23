import React from 'react';
const LABEL_8759 = 'component_8759';
export function Component8759({ value = 8759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8759, 'data-value': derived.doubled }, children);
}
export default Component8759;

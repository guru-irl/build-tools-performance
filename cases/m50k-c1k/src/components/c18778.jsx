import React from 'react';
const LABEL_18778 = 'component_18778';
export function Component18778({ value = 18778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18778, 'data-value': derived.doubled }, children);
}
export default Component18778;

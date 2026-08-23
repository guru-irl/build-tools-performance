import React from 'react';
const LABEL_945 = 'component_945';
export function Component945({ value = 945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_945, 'data-value': derived.doubled }, children);
}
export default Component945;

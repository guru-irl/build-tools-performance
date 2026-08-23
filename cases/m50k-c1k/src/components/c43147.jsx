import React from 'react';
const LABEL_43147 = 'component_43147';
export function Component43147({ value = 43147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43147, 'data-value': derived.doubled }, children);
}
export default Component43147;

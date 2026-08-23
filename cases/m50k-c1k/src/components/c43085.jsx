import React from 'react';
const LABEL_43085 = 'component_43085';
export function Component43085({ value = 43085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43085, 'data-value': derived.doubled }, children);
}
export default Component43085;

import React from 'react';
const LABEL_43545 = 'component_43545';
export function Component43545({ value = 43545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43545, 'data-value': derived.doubled }, children);
}
export default Component43545;

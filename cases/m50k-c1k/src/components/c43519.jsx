import React from 'react';
const LABEL_43519 = 'component_43519';
export function Component43519({ value = 43519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43519, 'data-value': derived.doubled }, children);
}
export default Component43519;

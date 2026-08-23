import React from 'react';
const LABEL_43209 = 'component_43209';
export function Component43209({ value = 43209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43209, 'data-value': derived.doubled }, children);
}
export default Component43209;

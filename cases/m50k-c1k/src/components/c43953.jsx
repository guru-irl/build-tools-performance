import React from 'react';
const LABEL_43953 = 'component_43953';
export function Component43953({ value = 43953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43953, 'data-value': derived.doubled }, children);
}
export default Component43953;

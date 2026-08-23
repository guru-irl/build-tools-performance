import React from 'react';
const LABEL_43593 = 'component_43593';
export function Component43593({ value = 43593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43593, 'data-value': derived.doubled }, children);
}
export default Component43593;

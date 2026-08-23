import React from 'react';
const LABEL_43009 = 'component_43009';
export function Component43009({ value = 43009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43009, 'data-value': derived.doubled }, children);
}
export default Component43009;

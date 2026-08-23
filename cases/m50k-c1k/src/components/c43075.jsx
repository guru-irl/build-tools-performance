import React from 'react';
const LABEL_43075 = 'component_43075';
export function Component43075({ value = 43075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43075, 'data-value': derived.doubled }, children);
}
export default Component43075;

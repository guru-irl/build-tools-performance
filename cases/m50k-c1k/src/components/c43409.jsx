import React from 'react';
const LABEL_43409 = 'component_43409';
export function Component43409({ value = 43409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43409, 'data-value': derived.doubled }, children);
}
export default Component43409;

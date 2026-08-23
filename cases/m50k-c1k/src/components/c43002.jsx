import React from 'react';
const LABEL_43002 = 'component_43002';
export function Component43002({ value = 43002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43002, 'data-value': derived.doubled }, children);
}
export default Component43002;

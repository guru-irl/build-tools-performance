import React from 'react';
const LABEL_43542 = 'component_43542';
export function Component43542({ value = 43542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43542, 'data-value': derived.doubled }, children);
}
export default Component43542;

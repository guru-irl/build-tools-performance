import React from 'react';
const LABEL_43528 = 'component_43528';
export function Component43528({ value = 43528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43528, 'data-value': derived.doubled }, children);
}
export default Component43528;

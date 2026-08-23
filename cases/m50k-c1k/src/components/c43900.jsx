import React from 'react';
const LABEL_43900 = 'component_43900';
export function Component43900({ value = 43900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43900, 'data-value': derived.doubled }, children);
}
export default Component43900;

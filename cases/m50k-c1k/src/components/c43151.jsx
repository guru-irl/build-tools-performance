import React from 'react';
const LABEL_43151 = 'component_43151';
export function Component43151({ value = 43151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43151, 'data-value': derived.doubled }, children);
}
export default Component43151;

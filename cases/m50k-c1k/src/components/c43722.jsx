import React from 'react';
const LABEL_43722 = 'component_43722';
export function Component43722({ value = 43722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43722, 'data-value': derived.doubled }, children);
}
export default Component43722;

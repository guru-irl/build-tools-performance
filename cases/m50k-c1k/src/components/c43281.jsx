import React from 'react';
const LABEL_43281 = 'component_43281';
export function Component43281({ value = 43281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43281, 'data-value': derived.doubled }, children);
}
export default Component43281;

import React from 'react';
const LABEL_43780 = 'component_43780';
export function Component43780({ value = 43780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43780, 'data-value': derived.doubled }, children);
}
export default Component43780;

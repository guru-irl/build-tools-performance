import React from 'react';
const LABEL_43365 = 'component_43365';
export function Component43365({ value = 43365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43365, 'data-value': derived.doubled }, children);
}
export default Component43365;

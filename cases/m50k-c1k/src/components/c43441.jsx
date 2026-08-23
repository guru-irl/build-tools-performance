import React from 'react';
const LABEL_43441 = 'component_43441';
export function Component43441({ value = 43441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43441, 'data-value': derived.doubled }, children);
}
export default Component43441;

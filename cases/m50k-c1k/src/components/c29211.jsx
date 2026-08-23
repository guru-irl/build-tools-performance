import React from 'react';
const LABEL_29211 = 'component_29211';
export function Component29211({ value = 29211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29211, 'data-value': derived.doubled }, children);
}
export default Component29211;

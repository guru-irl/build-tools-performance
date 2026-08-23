import React from 'react';
const LABEL_43197 = 'component_43197';
export function Component43197({ value = 43197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43197, 'data-value': derived.doubled }, children);
}
export default Component43197;

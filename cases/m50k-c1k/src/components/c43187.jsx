import React from 'react';
const LABEL_43187 = 'component_43187';
export function Component43187({ value = 43187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43187, 'data-value': derived.doubled }, children);
}
export default Component43187;

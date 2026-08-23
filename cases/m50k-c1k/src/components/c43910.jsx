import React from 'react';
const LABEL_43910 = 'component_43910';
export function Component43910({ value = 43910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43910, 'data-value': derived.doubled }, children);
}
export default Component43910;

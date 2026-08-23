import React from 'react';
const LABEL_29153 = 'component_29153';
export function Component29153({ value = 29153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29153, 'data-value': derived.doubled }, children);
}
export default Component29153;

import React from 'react';
const LABEL_29879 = 'component_29879';
export function Component29879({ value = 29879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29879, 'data-value': derived.doubled }, children);
}
export default Component29879;

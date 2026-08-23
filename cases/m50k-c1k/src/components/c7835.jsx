import React from 'react';
const LABEL_7835 = 'component_7835';
export function Component7835({ value = 7835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7835, 'data-value': derived.doubled }, children);
}
export default Component7835;

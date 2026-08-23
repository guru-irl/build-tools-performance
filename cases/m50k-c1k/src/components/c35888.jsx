import React from 'react';
const LABEL_35888 = 'component_35888';
export function Component35888({ value = 35888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35888, 'data-value': derived.doubled }, children);
}
export default Component35888;

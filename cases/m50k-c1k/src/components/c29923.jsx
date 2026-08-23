import React from 'react';
const LABEL_29923 = 'component_29923';
export function Component29923({ value = 29923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29923, 'data-value': derived.doubled }, children);
}
export default Component29923;

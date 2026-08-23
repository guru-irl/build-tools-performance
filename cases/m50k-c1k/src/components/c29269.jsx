import React from 'react';
const LABEL_29269 = 'component_29269';
export function Component29269({ value = 29269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29269, 'data-value': derived.doubled }, children);
}
export default Component29269;

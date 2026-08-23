import React from 'react';
const LABEL_13269 = 'component_13269';
export function Component13269({ value = 13269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13269, 'data-value': derived.doubled }, children);
}
export default Component13269;

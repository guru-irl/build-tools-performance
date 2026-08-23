import React from 'react';
const LABEL_10179 = 'component_10179';
export function Component10179({ value = 10179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10179, 'data-value': derived.doubled }, children);
}
export default Component10179;

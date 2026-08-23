import React from 'react';
const LABEL_12907 = 'component_12907';
export function Component12907({ value = 12907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12907, 'data-value': derived.doubled }, children);
}
export default Component12907;

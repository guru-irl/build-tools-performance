import React from 'react';
const LABEL_10004 = 'component_10004';
export function Component10004({ value = 10004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10004, 'data-value': derived.doubled }, children);
}
export default Component10004;

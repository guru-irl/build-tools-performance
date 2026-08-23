import React from 'react';
const LABEL_7004 = 'component_7004';
export function Component7004({ value = 7004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7004, 'data-value': derived.doubled }, children);
}
export default Component7004;

import React from 'react';
const LABEL_7002 = 'component_7002';
export function Component7002({ value = 7002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7002, 'data-value': derived.doubled }, children);
}
export default Component7002;

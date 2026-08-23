import React from 'react';
const LABEL_7990 = 'component_7990';
export function Component7990({ value = 7990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7990, 'data-value': derived.doubled }, children);
}
export default Component7990;

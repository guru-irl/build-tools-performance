import React from 'react';
const LABEL_36040 = 'component_36040';
export function Component36040({ value = 36040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36040, 'data-value': derived.doubled }, children);
}
export default Component36040;

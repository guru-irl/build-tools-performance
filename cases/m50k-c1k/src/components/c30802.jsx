import React from 'react';
const LABEL_30802 = 'component_30802';
export function Component30802({ value = 30802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30802, 'data-value': derived.doubled }, children);
}
export default Component30802;

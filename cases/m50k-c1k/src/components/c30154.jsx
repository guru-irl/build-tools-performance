import React from 'react';
const LABEL_30154 = 'component_30154';
export function Component30154({ value = 30154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30154, 'data-value': derived.doubled }, children);
}
export default Component30154;

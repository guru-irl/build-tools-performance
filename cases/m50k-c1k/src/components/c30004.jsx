import React from 'react';
const LABEL_30004 = 'component_30004';
export function Component30004({ value = 30004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30004, 'data-value': derived.doubled }, children);
}
export default Component30004;

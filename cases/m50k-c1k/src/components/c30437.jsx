import React from 'react';
const LABEL_30437 = 'component_30437';
export function Component30437({ value = 30437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30437, 'data-value': derived.doubled }, children);
}
export default Component30437;

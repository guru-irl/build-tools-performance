import React from 'react';
const LABEL_30548 = 'component_30548';
export function Component30548({ value = 30548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30548, 'data-value': derived.doubled }, children);
}
export default Component30548;

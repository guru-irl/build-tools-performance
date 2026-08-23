import React from 'react';
const LABEL_30043 = 'component_30043';
export function Component30043({ value = 30043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30043, 'data-value': derived.doubled }, children);
}
export default Component30043;

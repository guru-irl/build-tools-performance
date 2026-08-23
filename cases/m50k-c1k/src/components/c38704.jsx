import React from 'react';
const LABEL_38704 = 'component_38704';
export function Component38704({ value = 38704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38704, 'data-value': derived.doubled }, children);
}
export default Component38704;

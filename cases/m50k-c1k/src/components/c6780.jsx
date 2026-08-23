import React from 'react';
const LABEL_6780 = 'component_6780';
export function Component6780({ value = 6780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6780, 'data-value': derived.doubled }, children);
}
export default Component6780;

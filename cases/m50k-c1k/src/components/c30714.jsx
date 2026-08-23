import React from 'react';
const LABEL_30714 = 'component_30714';
export function Component30714({ value = 30714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30714, 'data-value': derived.doubled }, children);
}
export default Component30714;

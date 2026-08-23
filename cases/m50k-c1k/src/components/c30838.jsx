import React from 'react';
const LABEL_30838 = 'component_30838';
export function Component30838({ value = 30838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30838, 'data-value': derived.doubled }, children);
}
export default Component30838;

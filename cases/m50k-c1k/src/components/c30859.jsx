import React from 'react';
const LABEL_30859 = 'component_30859';
export function Component30859({ value = 30859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30859, 'data-value': derived.doubled }, children);
}
export default Component30859;

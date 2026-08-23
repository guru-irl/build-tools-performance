import React from 'react';
const LABEL_30631 = 'component_30631';
export function Component30631({ value = 30631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30631, 'data-value': derived.doubled }, children);
}
export default Component30631;

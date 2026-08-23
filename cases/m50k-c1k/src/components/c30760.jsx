import React from 'react';
const LABEL_30760 = 'component_30760';
export function Component30760({ value = 30760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30760, 'data-value': derived.doubled }, children);
}
export default Component30760;

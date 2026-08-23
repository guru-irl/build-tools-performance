import React from 'react';
const LABEL_30528 = 'component_30528';
export function Component30528({ value = 30528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30528, 'data-value': derived.doubled }, children);
}
export default Component30528;

import React from 'react';
const LABEL_30577 = 'component_30577';
export function Component30577({ value = 30577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30577, 'data-value': derived.doubled }, children);
}
export default Component30577;

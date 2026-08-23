import React from 'react';
const LABEL_30968 = 'component_30968';
export function Component30968({ value = 30968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30968, 'data-value': derived.doubled }, children);
}
export default Component30968;

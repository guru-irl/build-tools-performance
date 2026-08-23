import React from 'react';
const LABEL_30730 = 'component_30730';
export function Component30730({ value = 30730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30730, 'data-value': derived.doubled }, children);
}
export default Component30730;

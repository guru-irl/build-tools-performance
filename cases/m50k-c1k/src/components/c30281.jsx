import React from 'react';
const LABEL_30281 = 'component_30281';
export function Component30281({ value = 30281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30281, 'data-value': derived.doubled }, children);
}
export default Component30281;

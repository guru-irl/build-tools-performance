import React from 'react';
const LABEL_30883 = 'component_30883';
export function Component30883({ value = 30883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30883, 'data-value': derived.doubled }, children);
}
export default Component30883;

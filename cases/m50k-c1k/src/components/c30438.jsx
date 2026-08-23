import React from 'react';
const LABEL_30438 = 'component_30438';
export function Component30438({ value = 30438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30438, 'data-value': derived.doubled }, children);
}
export default Component30438;

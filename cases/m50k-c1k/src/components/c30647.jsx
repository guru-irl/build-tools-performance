import React from 'react';
const LABEL_30647 = 'component_30647';
export function Component30647({ value = 30647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30647, 'data-value': derived.doubled }, children);
}
export default Component30647;

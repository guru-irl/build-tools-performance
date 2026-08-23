import React from 'react';
const LABEL_30757 = 'component_30757';
export function Component30757({ value = 30757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30757, 'data-value': derived.doubled }, children);
}
export default Component30757;

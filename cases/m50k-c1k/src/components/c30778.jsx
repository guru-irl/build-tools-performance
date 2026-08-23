import React from 'react';
const LABEL_30778 = 'component_30778';
export function Component30778({ value = 30778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30778, 'data-value': derived.doubled }, children);
}
export default Component30778;

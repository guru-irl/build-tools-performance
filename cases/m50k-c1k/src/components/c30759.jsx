import React from 'react';
const LABEL_30759 = 'component_30759';
export function Component30759({ value = 30759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30759, 'data-value': derived.doubled }, children);
}
export default Component30759;

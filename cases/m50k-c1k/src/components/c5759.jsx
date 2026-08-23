import React from 'react';
const LABEL_5759 = 'component_5759';
export function Component5759({ value = 5759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5759, 'data-value': derived.doubled }, children);
}
export default Component5759;

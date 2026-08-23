import React from 'react';
const LABEL_14759 = 'component_14759';
export function Component14759({ value = 14759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14759, 'data-value': derived.doubled }, children);
}
export default Component14759;

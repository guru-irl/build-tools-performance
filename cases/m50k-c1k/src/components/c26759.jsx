import React from 'react';
const LABEL_26759 = 'component_26759';
export function Component26759({ value = 26759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26759, 'data-value': derived.doubled }, children);
}
export default Component26759;

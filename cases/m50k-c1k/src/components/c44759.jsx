import React from 'react';
const LABEL_44759 = 'component_44759';
export function Component44759({ value = 44759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44759, 'data-value': derived.doubled }, children);
}
export default Component44759;

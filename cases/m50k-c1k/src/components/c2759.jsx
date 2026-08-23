import React from 'react';
const LABEL_2759 = 'component_2759';
export function Component2759({ value = 2759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2759, 'data-value': derived.doubled }, children);
}
export default Component2759;

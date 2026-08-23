import React from 'react';
const LABEL_759 = 'component_759';
export function Component759({ value = 759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_759, 'data-value': derived.doubled }, children);
}
export default Component759;

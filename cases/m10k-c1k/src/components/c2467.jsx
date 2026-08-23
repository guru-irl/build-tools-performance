import React from 'react';
const LABEL_2467 = 'component_2467';
export function Component2467({ value = 2467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2467, 'data-value': derived.doubled }, children);
}
export default Component2467;

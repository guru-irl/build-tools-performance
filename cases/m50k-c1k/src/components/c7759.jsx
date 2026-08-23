import React from 'react';
const LABEL_7759 = 'component_7759';
export function Component7759({ value = 7759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7759, 'data-value': derived.doubled }, children);
}
export default Component7759;

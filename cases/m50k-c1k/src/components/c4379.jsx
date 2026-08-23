import React from 'react';
const LABEL_4379 = 'component_4379';
export function Component4379({ value = 4379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4379, 'data-value': derived.doubled }, children);
}
export default Component4379;

import React from 'react';
const LABEL_23622 = 'component_23622';
export function Component23622({ value = 23622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23622, 'data-value': derived.doubled }, children);
}
export default Component23622;

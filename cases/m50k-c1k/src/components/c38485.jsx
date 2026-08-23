import React from 'react';
const LABEL_38485 = 'component_38485';
export function Component38485({ value = 38485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38485, 'data-value': derived.doubled }, children);
}
export default Component38485;

import React from 'react';
const LABEL_12829 = 'component_12829';
export function Component12829({ value = 12829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12829, 'data-value': derived.doubled }, children);
}
export default Component12829;

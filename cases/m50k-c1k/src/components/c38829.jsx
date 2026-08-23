import React from 'react';
const LABEL_38829 = 'component_38829';
export function Component38829({ value = 38829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38829, 'data-value': derived.doubled }, children);
}
export default Component38829;

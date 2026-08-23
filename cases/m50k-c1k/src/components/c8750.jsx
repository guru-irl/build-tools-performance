import React from 'react';
const LABEL_8750 = 'component_8750';
export function Component8750({ value = 8750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8750, 'data-value': derived.doubled }, children);
}
export default Component8750;

import React from 'react';
const LABEL_5585 = 'component_5585';
export function Component5585({ value = 5585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5585, 'data-value': derived.doubled }, children);
}
export default Component5585;

import React from 'react';
const LABEL_14421 = 'component_14421';
export function Component14421({ value = 14421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14421, 'data-value': derived.doubled }, children);
}
export default Component14421;

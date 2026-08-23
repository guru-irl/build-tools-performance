import React from 'react';
const LABEL_22655 = 'component_22655';
export function Component22655({ value = 22655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22655, 'data-value': derived.doubled }, children);
}
export default Component22655;

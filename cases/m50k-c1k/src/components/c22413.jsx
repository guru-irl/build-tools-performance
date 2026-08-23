import React from 'react';
const LABEL_22413 = 'component_22413';
export function Component22413({ value = 22413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22413, 'data-value': derived.doubled }, children);
}
export default Component22413;

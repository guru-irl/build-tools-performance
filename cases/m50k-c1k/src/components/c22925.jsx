import React from 'react';
const LABEL_22925 = 'component_22925';
export function Component22925({ value = 22925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22925, 'data-value': derived.doubled }, children);
}
export default Component22925;

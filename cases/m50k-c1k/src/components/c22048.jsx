import React from 'react';
const LABEL_22048 = 'component_22048';
export function Component22048({ value = 22048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22048, 'data-value': derived.doubled }, children);
}
export default Component22048;

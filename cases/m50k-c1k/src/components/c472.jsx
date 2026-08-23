import React from 'react';
const LABEL_472 = 'component_472';
export function Component472({ value = 472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_472, 'data-value': derived.doubled }, children);
}
export default Component472;

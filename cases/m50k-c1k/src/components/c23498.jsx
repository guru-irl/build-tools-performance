import React from 'react';
const LABEL_23498 = 'component_23498';
export function Component23498({ value = 23498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23498, 'data-value': derived.doubled }, children);
}
export default Component23498;

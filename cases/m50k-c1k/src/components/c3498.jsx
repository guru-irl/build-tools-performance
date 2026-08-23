import React from 'react';
const LABEL_3498 = 'component_3498';
export function Component3498({ value = 3498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3498, 'data-value': derived.doubled }, children);
}
export default Component3498;

import React from 'react';
const LABEL_40340 = 'component_40340';
export function Component40340({ value = 40340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40340, 'data-value': derived.doubled }, children);
}
export default Component40340;

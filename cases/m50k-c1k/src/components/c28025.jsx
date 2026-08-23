import React from 'react';
const LABEL_28025 = 'component_28025';
export function Component28025({ value = 28025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28025, 'data-value': derived.doubled }, children);
}
export default Component28025;

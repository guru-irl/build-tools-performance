import React from 'react';
const LABEL_38771 = 'component_38771';
export function Component38771({ value = 38771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38771, 'data-value': derived.doubled }, children);
}
export default Component38771;

import React from 'react';
const LABEL_28771 = 'component_28771';
export function Component28771({ value = 28771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28771, 'data-value': derived.doubled }, children);
}
export default Component28771;

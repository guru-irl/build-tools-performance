import React from 'react';
const LABEL_28972 = 'component_28972';
export function Component28972({ value = 28972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28972, 'data-value': derived.doubled }, children);
}
export default Component28972;

import React from 'react';
const LABEL_28757 = 'component_28757';
export function Component28757({ value = 28757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28757, 'data-value': derived.doubled }, children);
}
export default Component28757;

import React from 'react';
const LABEL_28786 = 'component_28786';
export function Component28786({ value = 28786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28786, 'data-value': derived.doubled }, children);
}
export default Component28786;

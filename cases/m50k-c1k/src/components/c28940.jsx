import React from 'react';
const LABEL_28940 = 'component_28940';
export function Component28940({ value = 28940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28940, 'data-value': derived.doubled }, children);
}
export default Component28940;

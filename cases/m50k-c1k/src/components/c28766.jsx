import React from 'react';
const LABEL_28766 = 'component_28766';
export function Component28766({ value = 28766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28766, 'data-value': derived.doubled }, children);
}
export default Component28766;

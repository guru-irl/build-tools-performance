import React from 'react';
const LABEL_28536 = 'component_28536';
export function Component28536({ value = 28536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28536, 'data-value': derived.doubled }, children);
}
export default Component28536;

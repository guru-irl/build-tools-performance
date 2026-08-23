import React from 'react';
const LABEL_28928 = 'component_28928';
export function Component28928({ value = 28928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28928, 'data-value': derived.doubled }, children);
}
export default Component28928;

import React from 'react';
const LABEL_33134 = 'component_33134';
export function Component33134({ value = 33134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33134, 'data-value': derived.doubled }, children);
}
export default Component33134;

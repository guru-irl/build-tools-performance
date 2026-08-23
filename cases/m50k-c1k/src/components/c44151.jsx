import React from 'react';
const LABEL_44151 = 'component_44151';
export function Component44151({ value = 44151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44151, 'data-value': derived.doubled }, children);
}
export default Component44151;

import React from 'react';
const LABEL_31996 = 'component_31996';
export function Component31996({ value = 31996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31996, 'data-value': derived.doubled }, children);
}
export default Component31996;

import React from 'react';
const LABEL_18881 = 'component_18881';
export function Component18881({ value = 18881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18881, 'data-value': derived.doubled }, children);
}
export default Component18881;

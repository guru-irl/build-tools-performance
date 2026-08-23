import React from 'react';
const LABEL_22797 = 'component_22797';
export function Component22797({ value = 22797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22797, 'data-value': derived.doubled }, children);
}
export default Component22797;

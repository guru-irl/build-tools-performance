import React from 'react';
const LABEL_29797 = 'component_29797';
export function Component29797({ value = 29797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29797, 'data-value': derived.doubled }, children);
}
export default Component29797;

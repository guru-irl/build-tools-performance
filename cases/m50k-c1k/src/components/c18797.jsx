import React from 'react';
const LABEL_18797 = 'component_18797';
export function Component18797({ value = 18797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18797, 'data-value': derived.doubled }, children);
}
export default Component18797;

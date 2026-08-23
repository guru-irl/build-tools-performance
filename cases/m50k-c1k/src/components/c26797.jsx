import React from 'react';
const LABEL_26797 = 'component_26797';
export function Component26797({ value = 26797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26797, 'data-value': derived.doubled }, children);
}
export default Component26797;

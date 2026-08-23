import React from 'react';
const LABEL_6797 = 'component_6797';
export function Component6797({ value = 6797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6797, 'data-value': derived.doubled }, children);
}
export default Component6797;

import React from 'react';
const LABEL_1797 = 'component_1797';
export function Component1797({ value = 1797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1797, 'data-value': derived.doubled }, children);
}
export default Component1797;

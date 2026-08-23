import React from 'react';
const LABEL_5797 = 'component_5797';
export function Component5797({ value = 5797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5797, 'data-value': derived.doubled }, children);
}
export default Component5797;

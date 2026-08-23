import React from 'react';
const LABEL_36797 = 'component_36797';
export function Component36797({ value = 36797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36797, 'data-value': derived.doubled }, children);
}
export default Component36797;

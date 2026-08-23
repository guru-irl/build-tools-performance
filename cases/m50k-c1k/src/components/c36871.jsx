import React from 'react';
const LABEL_36871 = 'component_36871';
export function Component36871({ value = 36871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36871, 'data-value': derived.doubled }, children);
}
export default Component36871;

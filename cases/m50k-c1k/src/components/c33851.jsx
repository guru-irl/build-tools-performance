import React from 'react';
const LABEL_33851 = 'component_33851';
export function Component33851({ value = 33851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33851, 'data-value': derived.doubled }, children);
}
export default Component33851;

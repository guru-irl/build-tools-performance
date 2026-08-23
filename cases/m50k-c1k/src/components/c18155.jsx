import React from 'react';
const LABEL_18155 = 'component_18155';
export function Component18155({ value = 18155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18155, 'data-value': derived.doubled }, children);
}
export default Component18155;

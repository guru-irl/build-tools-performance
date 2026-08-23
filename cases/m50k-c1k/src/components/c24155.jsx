import React from 'react';
const LABEL_24155 = 'component_24155';
export function Component24155({ value = 24155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24155, 'data-value': derived.doubled }, children);
}
export default Component24155;

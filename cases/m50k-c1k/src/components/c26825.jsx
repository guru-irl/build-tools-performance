import React from 'react';
const LABEL_26825 = 'component_26825';
export function Component26825({ value = 26825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26825, 'data-value': derived.doubled }, children);
}
export default Component26825;

import React from 'react';
const LABEL_16155 = 'component_16155';
export function Component16155({ value = 16155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16155, 'data-value': derived.doubled }, children);
}
export default Component16155;

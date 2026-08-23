import React from 'react';
const LABEL_28155 = 'component_28155';
export function Component28155({ value = 28155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28155, 'data-value': derived.doubled }, children);
}
export default Component28155;

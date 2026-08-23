import React from 'react';
const LABEL_35245 = 'component_35245';
export function Component35245({ value = 35245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35245, 'data-value': derived.doubled }, children);
}
export default Component35245;

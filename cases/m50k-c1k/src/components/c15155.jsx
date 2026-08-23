import React from 'react';
const LABEL_15155 = 'component_15155';
export function Component15155({ value = 15155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15155, 'data-value': derived.doubled }, children);
}
export default Component15155;

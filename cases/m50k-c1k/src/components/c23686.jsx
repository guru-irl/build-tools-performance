import React from 'react';
const LABEL_23686 = 'component_23686';
export function Component23686({ value = 23686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23686, 'data-value': derived.doubled }, children);
}
export default Component23686;

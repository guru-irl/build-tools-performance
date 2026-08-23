import React from 'react';
const LABEL_28686 = 'component_28686';
export function Component28686({ value = 28686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28686, 'data-value': derived.doubled }, children);
}
export default Component28686;

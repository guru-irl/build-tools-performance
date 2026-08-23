import React from 'react';
const LABEL_14686 = 'component_14686';
export function Component14686({ value = 14686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14686, 'data-value': derived.doubled }, children);
}
export default Component14686;

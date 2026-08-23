import React from 'react';
const LABEL_18827 = 'component_18827';
export function Component18827({ value = 18827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18827, 'data-value': derived.doubled }, children);
}
export default Component18827;

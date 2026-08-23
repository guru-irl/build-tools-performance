import React from 'react';
const LABEL_18434 = 'component_18434';
export function Component18434({ value = 18434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18434, 'data-value': derived.doubled }, children);
}
export default Component18434;

import React from 'react';
const LABEL_18583 = 'component_18583';
export function Component18583({ value = 18583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18583, 'data-value': derived.doubled }, children);
}
export default Component18583;

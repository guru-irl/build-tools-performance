import React from 'react';
const LABEL_18747 = 'component_18747';
export function Component18747({ value = 18747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18747, 'data-value': derived.doubled }, children);
}
export default Component18747;

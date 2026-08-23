import React from 'react';
const LABEL_73 = 'component_73';
export function Component73({ value = 73, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_73, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_73, 'data-value': derived.doubled }, children);
}
export default Component73;

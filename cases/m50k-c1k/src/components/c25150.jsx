import React from 'react';
const LABEL_25150 = 'component_25150';
export function Component25150({ value = 25150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25150, 'data-value': derived.doubled }, children);
}
export default Component25150;

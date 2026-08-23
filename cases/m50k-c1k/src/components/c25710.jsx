import React from 'react';
const LABEL_25710 = 'component_25710';
export function Component25710({ value = 25710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25710, 'data-value': derived.doubled }, children);
}
export default Component25710;

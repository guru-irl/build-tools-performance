import React from 'react';
const LABEL_25161 = 'component_25161';
export function Component25161({ value = 25161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25161, 'data-value': derived.doubled }, children);
}
export default Component25161;

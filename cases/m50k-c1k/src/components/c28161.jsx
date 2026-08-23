import React from 'react';
const LABEL_28161 = 'component_28161';
export function Component28161({ value = 28161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28161, 'data-value': derived.doubled }, children);
}
export default Component28161;

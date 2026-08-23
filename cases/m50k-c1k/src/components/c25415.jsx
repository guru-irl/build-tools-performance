import React from 'react';
const LABEL_25415 = 'component_25415';
export function Component25415({ value = 25415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25415, 'data-value': derived.doubled }, children);
}
export default Component25415;

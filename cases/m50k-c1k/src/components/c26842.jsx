import React from 'react';
const LABEL_26842 = 'component_26842';
export function Component26842({ value = 26842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26842, 'data-value': derived.doubled }, children);
}
export default Component26842;

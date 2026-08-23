import React from 'react';
const LABEL_26505 = 'component_26505';
export function Component26505({ value = 26505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26505, 'data-value': derived.doubled }, children);
}
export default Component26505;

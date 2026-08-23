import React from 'react';
const LABEL_26534 = 'component_26534';
export function Component26534({ value = 26534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26534, 'data-value': derived.doubled }, children);
}
export default Component26534;

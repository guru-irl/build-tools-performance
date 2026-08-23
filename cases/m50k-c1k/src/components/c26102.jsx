import React from 'react';
const LABEL_26102 = 'component_26102';
export function Component26102({ value = 26102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26102, 'data-value': derived.doubled }, children);
}
export default Component26102;

import React from 'react';
const LABEL_18487 = 'component_18487';
export function Component18487({ value = 18487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18487, 'data-value': derived.doubled }, children);
}
export default Component18487;

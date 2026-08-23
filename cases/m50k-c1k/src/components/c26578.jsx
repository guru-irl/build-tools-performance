import React from 'react';
const LABEL_26578 = 'component_26578';
export function Component26578({ value = 26578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26578, 'data-value': derived.doubled }, children);
}
export default Component26578;

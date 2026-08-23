import React from 'react';
const LABEL_37182 = 'component_37182';
export function Component37182({ value = 37182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37182, 'data-value': derived.doubled }, children);
}
export default Component37182;

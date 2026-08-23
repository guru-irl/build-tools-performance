import React from 'react';
const LABEL_46487 = 'component_46487';
export function Component46487({ value = 46487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46487, 'data-value': derived.doubled }, children);
}
export default Component46487;

import React from 'react';
const LABEL_26992 = 'component_26992';
export function Component26992({ value = 26992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26992, 'data-value': derived.doubled }, children);
}
export default Component26992;

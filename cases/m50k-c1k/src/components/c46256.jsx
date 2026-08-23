import React from 'react';
const LABEL_46256 = 'component_46256';
export function Component46256({ value = 46256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46256, 'data-value': derived.doubled }, children);
}
export default Component46256;

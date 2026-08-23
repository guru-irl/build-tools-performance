import React from 'react';
const LABEL_26117 = 'component_26117';
export function Component26117({ value = 26117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26117, 'data-value': derived.doubled }, children);
}
export default Component26117;

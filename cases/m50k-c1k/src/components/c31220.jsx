import React from 'react';
const LABEL_31220 = 'component_31220';
export function Component31220({ value = 31220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31220, 'data-value': derived.doubled }, children);
}
export default Component31220;

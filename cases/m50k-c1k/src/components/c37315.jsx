import React from 'react';
const LABEL_37315 = 'component_37315';
export function Component37315({ value = 37315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37315, 'data-value': derived.doubled }, children);
}
export default Component37315;

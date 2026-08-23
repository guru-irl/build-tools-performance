import React from 'react';
const LABEL_17220 = 'component_17220';
export function Component17220({ value = 17220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17220, 'data-value': derived.doubled }, children);
}
export default Component17220;

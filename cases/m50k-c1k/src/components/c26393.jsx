import React from 'react';
const LABEL_26393 = 'component_26393';
export function Component26393({ value = 26393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26393, 'data-value': derived.doubled }, children);
}
export default Component26393;

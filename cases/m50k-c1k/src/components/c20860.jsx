import React from 'react';
const LABEL_20860 = 'component_20860';
export function Component20860({ value = 20860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20860, 'data-value': derived.doubled }, children);
}
export default Component20860;

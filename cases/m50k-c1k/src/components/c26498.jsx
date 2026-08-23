import React from 'react';
const LABEL_26498 = 'component_26498';
export function Component26498({ value = 26498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26498, 'data-value': derived.doubled }, children);
}
export default Component26498;

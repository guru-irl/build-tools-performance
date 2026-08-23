import React from 'react';
const LABEL_16220 = 'component_16220';
export function Component16220({ value = 16220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16220, 'data-value': derived.doubled }, children);
}
export default Component16220;

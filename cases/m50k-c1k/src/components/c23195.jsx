import React from 'react';
const LABEL_23195 = 'component_23195';
export function Component23195({ value = 23195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23195, 'data-value': derived.doubled }, children);
}
export default Component23195;

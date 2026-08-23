import React from 'react';
const LABEL_24763 = 'component_24763';
export function Component24763({ value = 24763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24763, 'data-value': derived.doubled }, children);
}
export default Component24763;

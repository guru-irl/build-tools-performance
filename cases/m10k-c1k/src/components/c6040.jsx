import React from 'react';
const LABEL_6040 = 'component_6040';
export function Component6040({ value = 6040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6040, 'data-value': derived.doubled }, children);
}
export default Component6040;

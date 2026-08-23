import React from 'react';
const LABEL_25040 = 'component_25040';
export function Component25040({ value = 25040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25040, 'data-value': derived.doubled }, children);
}
export default Component25040;

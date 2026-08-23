import React from 'react';
const LABEL_19459 = 'component_19459';
export function Component19459({ value = 19459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19459, 'data-value': derived.doubled }, children);
}
export default Component19459;

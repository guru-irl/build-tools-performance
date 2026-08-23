import React from 'react';
const LABEL_45459 = 'component_45459';
export function Component45459({ value = 45459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45459, 'data-value': derived.doubled }, children);
}
export default Component45459;

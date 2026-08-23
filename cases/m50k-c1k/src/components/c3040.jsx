import React from 'react';
const LABEL_3040 = 'component_3040';
export function Component3040({ value = 3040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3040, 'data-value': derived.doubled }, children);
}
export default Component3040;

import React from 'react';
const LABEL_22040 = 'component_22040';
export function Component22040({ value = 22040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22040, 'data-value': derived.doubled }, children);
}
export default Component22040;

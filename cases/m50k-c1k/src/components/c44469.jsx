import React from 'react';
const LABEL_44469 = 'component_44469';
export function Component44469({ value = 44469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44469, 'data-value': derived.doubled }, children);
}
export default Component44469;

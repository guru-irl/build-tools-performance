import React from 'react';
const LABEL_44010 = 'component_44010';
export function Component44010({ value = 44010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44010, 'data-value': derived.doubled }, children);
}
export default Component44010;

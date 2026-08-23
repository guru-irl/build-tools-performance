import React from 'react';
const LABEL_44148 = 'component_44148';
export function Component44148({ value = 44148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44148, 'data-value': derived.doubled }, children);
}
export default Component44148;

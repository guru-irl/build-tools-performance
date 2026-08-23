import React from 'react';
const LABEL_44218 = 'component_44218';
export function Component44218({ value = 44218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44218, 'data-value': derived.doubled }, children);
}
export default Component44218;

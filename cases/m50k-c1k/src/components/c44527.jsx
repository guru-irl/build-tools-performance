import React from 'react';
const LABEL_44527 = 'component_44527';
export function Component44527({ value = 44527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44527, 'data-value': derived.doubled }, children);
}
export default Component44527;

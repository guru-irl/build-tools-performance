import React from 'react';
const LABEL_44244 = 'component_44244';
export function Component44244({ value = 44244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44244, 'data-value': derived.doubled }, children);
}
export default Component44244;

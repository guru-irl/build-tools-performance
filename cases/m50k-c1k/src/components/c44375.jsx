import React from 'react';
const LABEL_44375 = 'component_44375';
export function Component44375({ value = 44375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44375, 'data-value': derived.doubled }, children);
}
export default Component44375;

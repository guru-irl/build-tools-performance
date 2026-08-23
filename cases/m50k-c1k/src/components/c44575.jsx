import React from 'react';
const LABEL_44575 = 'component_44575';
export function Component44575({ value = 44575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44575, 'data-value': derived.doubled }, children);
}
export default Component44575;

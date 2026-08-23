import React from 'react';
const LABEL_44762 = 'component_44762';
export function Component44762({ value = 44762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44762, 'data-value': derived.doubled }, children);
}
export default Component44762;

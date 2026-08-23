import React from 'react';
const LABEL_37742 = 'component_37742';
export function Component37742({ value = 37742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37742, 'data-value': derived.doubled }, children);
}
export default Component37742;

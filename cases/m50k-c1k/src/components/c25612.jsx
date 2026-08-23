import React from 'react';
const LABEL_25612 = 'component_25612';
export function Component25612({ value = 25612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25612, 'data-value': derived.doubled }, children);
}
export default Component25612;

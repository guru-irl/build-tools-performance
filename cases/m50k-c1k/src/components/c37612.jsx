import React from 'react';
const LABEL_37612 = 'component_37612';
export function Component37612({ value = 37612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37612, 'data-value': derived.doubled }, children);
}
export default Component37612;

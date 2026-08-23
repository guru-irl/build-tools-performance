import React from 'react';
const LABEL_33819 = 'component_33819';
export function Component33819({ value = 33819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33819, 'data-value': derived.doubled }, children);
}
export default Component33819;

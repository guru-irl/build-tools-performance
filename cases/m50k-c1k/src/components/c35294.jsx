import React from 'react';
const LABEL_35294 = 'component_35294';
export function Component35294({ value = 35294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35294, 'data-value': derived.doubled }, children);
}
export default Component35294;

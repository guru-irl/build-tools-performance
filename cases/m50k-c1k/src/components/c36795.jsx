import React from 'react';
const LABEL_36795 = 'component_36795';
export function Component36795({ value = 36795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36795, 'data-value': derived.doubled }, children);
}
export default Component36795;

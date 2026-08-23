import React from 'react';
const LABEL_32795 = 'component_32795';
export function Component32795({ value = 32795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32795, 'data-value': derived.doubled }, children);
}
export default Component32795;

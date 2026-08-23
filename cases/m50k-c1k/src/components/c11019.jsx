import React from 'react';
const LABEL_11019 = 'component_11019';
export function Component11019({ value = 11019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11019, 'data-value': derived.doubled }, children);
}
export default Component11019;

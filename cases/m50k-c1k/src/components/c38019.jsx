import React from 'react';
const LABEL_38019 = 'component_38019';
export function Component38019({ value = 38019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38019, 'data-value': derived.doubled }, children);
}
export default Component38019;

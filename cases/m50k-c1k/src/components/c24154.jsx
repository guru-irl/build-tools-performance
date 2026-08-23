import React from 'react';
const LABEL_24154 = 'component_24154';
export function Component24154({ value = 24154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24154, 'data-value': derived.doubled }, children);
}
export default Component24154;

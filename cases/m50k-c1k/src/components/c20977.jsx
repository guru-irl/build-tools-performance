import React from 'react';
const LABEL_20977 = 'component_20977';
export function Component20977({ value = 20977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20977, 'data-value': derived.doubled }, children);
}
export default Component20977;

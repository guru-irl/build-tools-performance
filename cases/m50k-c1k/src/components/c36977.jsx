import React from 'react';
const LABEL_36977 = 'component_36977';
export function Component36977({ value = 36977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36977, 'data-value': derived.doubled }, children);
}
export default Component36977;

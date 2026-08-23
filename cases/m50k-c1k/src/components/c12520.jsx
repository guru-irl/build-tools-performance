import React from 'react';
const LABEL_12520 = 'component_12520';
export function Component12520({ value = 12520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12520, 'data-value': derived.doubled }, children);
}
export default Component12520;

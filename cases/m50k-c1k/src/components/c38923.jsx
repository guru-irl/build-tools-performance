import React from 'react';
const LABEL_38923 = 'component_38923';
export function Component38923({ value = 38923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38923, 'data-value': derived.doubled }, children);
}
export default Component38923;

import React from 'react';
const LABEL_7976 = 'component_7976';
export function Component7976({ value = 7976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7976, 'data-value': derived.doubled }, children);
}
export default Component7976;

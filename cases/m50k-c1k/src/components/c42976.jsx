import React from 'react';
const LABEL_42976 = 'component_42976';
export function Component42976({ value = 42976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42976, 'data-value': derived.doubled }, children);
}
export default Component42976;

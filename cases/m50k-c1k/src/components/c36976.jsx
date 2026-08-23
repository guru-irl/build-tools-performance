import React from 'react';
const LABEL_36976 = 'component_36976';
export function Component36976({ value = 36976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36976, 'data-value': derived.doubled }, children);
}
export default Component36976;

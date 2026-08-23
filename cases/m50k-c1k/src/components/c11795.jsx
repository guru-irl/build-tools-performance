import React from 'react';
const LABEL_11795 = 'component_11795';
export function Component11795({ value = 11795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11795, 'data-value': derived.doubled }, children);
}
export default Component11795;

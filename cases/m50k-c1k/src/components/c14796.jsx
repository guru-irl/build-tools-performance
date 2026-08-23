import React from 'react';
const LABEL_14796 = 'component_14796';
export function Component14796({ value = 14796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14796, 'data-value': derived.doubled }, children);
}
export default Component14796;

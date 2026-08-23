import React from 'react';
const LABEL_20651 = 'component_20651';
export function Component20651({ value = 20651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20651, 'data-value': derived.doubled }, children);
}
export default Component20651;

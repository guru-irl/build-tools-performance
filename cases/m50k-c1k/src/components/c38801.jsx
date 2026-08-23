import React from 'react';
const LABEL_38801 = 'component_38801';
export function Component38801({ value = 38801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38801, 'data-value': derived.doubled }, children);
}
export default Component38801;

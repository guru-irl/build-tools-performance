import React from 'react';
const LABEL_26801 = 'component_26801';
export function Component26801({ value = 26801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26801, 'data-value': derived.doubled }, children);
}
export default Component26801;

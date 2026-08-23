import React from 'react';
const LABEL_41801 = 'component_41801';
export function Component41801({ value = 41801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41801, 'data-value': derived.doubled }, children);
}
export default Component41801;

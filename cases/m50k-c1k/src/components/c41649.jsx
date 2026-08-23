import React from 'react';
const LABEL_41649 = 'component_41649';
export function Component41649({ value = 41649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41649, 'data-value': derived.doubled }, children);
}
export default Component41649;

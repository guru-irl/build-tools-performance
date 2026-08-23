import React from 'react';
const LABEL_40117 = 'component_40117';
export function Component40117({ value = 40117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40117, 'data-value': derived.doubled }, children);
}
export default Component40117;

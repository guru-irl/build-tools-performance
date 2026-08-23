import React from 'react';
const LABEL_41326 = 'component_41326';
export function Component41326({ value = 41326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41326, 'data-value': derived.doubled }, children);
}
export default Component41326;

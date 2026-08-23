import React from 'react';
const LABEL_41662 = 'component_41662';
export function Component41662({ value = 41662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41662, 'data-value': derived.doubled }, children);
}
export default Component41662;

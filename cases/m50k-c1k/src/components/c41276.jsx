import React from 'react';
const LABEL_41276 = 'component_41276';
export function Component41276({ value = 41276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41276, 'data-value': derived.doubled }, children);
}
export default Component41276;

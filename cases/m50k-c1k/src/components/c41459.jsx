import React from 'react';
const LABEL_41459 = 'component_41459';
export function Component41459({ value = 41459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41459, 'data-value': derived.doubled }, children);
}
export default Component41459;

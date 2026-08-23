import React from 'react';
const LABEL_41729 = 'component_41729';
export function Component41729({ value = 41729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41729, 'data-value': derived.doubled }, children);
}
export default Component41729;

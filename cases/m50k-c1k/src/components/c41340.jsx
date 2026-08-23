import React from 'react';
const LABEL_41340 = 'component_41340';
export function Component41340({ value = 41340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41340, 'data-value': derived.doubled }, children);
}
export default Component41340;

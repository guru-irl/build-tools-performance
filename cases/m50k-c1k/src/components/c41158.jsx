import React from 'react';
const LABEL_41158 = 'component_41158';
export function Component41158({ value = 41158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41158, 'data-value': derived.doubled }, children);
}
export default Component41158;

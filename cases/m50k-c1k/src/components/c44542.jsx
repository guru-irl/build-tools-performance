import React from 'react';
const LABEL_44542 = 'component_44542';
export function Component44542({ value = 44542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44542, 'data-value': derived.doubled }, children);
}
export default Component44542;

import React from 'react';
const LABEL_41247 = 'component_41247';
export function Component41247({ value = 41247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41247, 'data-value': derived.doubled }, children);
}
export default Component41247;

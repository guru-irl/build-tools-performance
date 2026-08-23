import React from 'react';
const LABEL_44736 = 'component_44736';
export function Component44736({ value = 44736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44736, 'data-value': derived.doubled }, children);
}
export default Component44736;

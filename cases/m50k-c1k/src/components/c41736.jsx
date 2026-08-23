import React from 'react';
const LABEL_41736 = 'component_41736';
export function Component41736({ value = 41736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41736, 'data-value': derived.doubled }, children);
}
export default Component41736;

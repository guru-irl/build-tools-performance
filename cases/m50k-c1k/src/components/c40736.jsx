import React from 'react';
const LABEL_40736 = 'component_40736';
export function Component40736({ value = 40736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40736, 'data-value': derived.doubled }, children);
}
export default Component40736;

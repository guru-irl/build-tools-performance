import React from 'react';
const LABEL_19736 = 'component_19736';
export function Component19736({ value = 19736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19736, 'data-value': derived.doubled }, children);
}
export default Component19736;

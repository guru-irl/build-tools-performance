import React from 'react';
const LABEL_25736 = 'component_25736';
export function Component25736({ value = 25736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25736, 'data-value': derived.doubled }, children);
}
export default Component25736;

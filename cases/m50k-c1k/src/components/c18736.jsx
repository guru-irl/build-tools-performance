import React from 'react';
const LABEL_18736 = 'component_18736';
export function Component18736({ value = 18736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18736, 'data-value': derived.doubled }, children);
}
export default Component18736;

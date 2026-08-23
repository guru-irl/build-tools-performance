import React from 'react';
const LABEL_34736 = 'component_34736';
export function Component34736({ value = 34736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34736, 'data-value': derived.doubled }, children);
}
export default Component34736;

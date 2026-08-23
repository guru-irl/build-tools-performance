import React from 'react';
const LABEL_15736 = 'component_15736';
export function Component15736({ value = 15736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15736, 'data-value': derived.doubled }, children);
}
export default Component15736;

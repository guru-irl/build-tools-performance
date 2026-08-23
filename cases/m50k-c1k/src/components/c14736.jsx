import React from 'react';
const LABEL_14736 = 'component_14736';
export function Component14736({ value = 14736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14736, 'data-value': derived.doubled }, children);
}
export default Component14736;

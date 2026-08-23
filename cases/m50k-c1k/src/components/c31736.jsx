import React from 'react';
const LABEL_31736 = 'component_31736';
export function Component31736({ value = 31736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31736, 'data-value': derived.doubled }, children);
}
export default Component31736;

import React from 'react';
const LABEL_39736 = 'component_39736';
export function Component39736({ value = 39736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39736, 'data-value': derived.doubled }, children);
}
export default Component39736;

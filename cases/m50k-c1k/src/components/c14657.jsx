import React from 'react';
const LABEL_14657 = 'component_14657';
export function Component14657({ value = 14657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14657, 'data-value': derived.doubled }, children);
}
export default Component14657;

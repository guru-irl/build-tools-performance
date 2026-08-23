import React from 'react';
const LABEL_14470 = 'component_14470';
export function Component14470({ value = 14470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14470, 'data-value': derived.doubled }, children);
}
export default Component14470;

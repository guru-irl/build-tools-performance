import React from 'react';
const LABEL_14776 = 'component_14776';
export function Component14776({ value = 14776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14776, 'data-value': derived.doubled }, children);
}
export default Component14776;

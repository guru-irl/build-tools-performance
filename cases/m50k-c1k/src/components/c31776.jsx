import React from 'react';
const LABEL_31776 = 'component_31776';
export function Component31776({ value = 31776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31776, 'data-value': derived.doubled }, children);
}
export default Component31776;

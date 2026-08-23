import React from 'react';
const LABEL_39522 = 'component_39522';
export function Component39522({ value = 39522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39522, 'data-value': derived.doubled }, children);
}
export default Component39522;

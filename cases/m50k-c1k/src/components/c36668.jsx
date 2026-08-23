import React from 'react';
const LABEL_36668 = 'component_36668';
export function Component36668({ value = 36668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36668, 'data-value': derived.doubled }, children);
}
export default Component36668;

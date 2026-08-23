import React from 'react';
const LABEL_31949 = 'component_31949';
export function Component31949({ value = 31949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31949, 'data-value': derived.doubled }, children);
}
export default Component31949;

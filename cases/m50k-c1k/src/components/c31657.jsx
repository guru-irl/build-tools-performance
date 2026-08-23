import React from 'react';
const LABEL_31657 = 'component_31657';
export function Component31657({ value = 31657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31657, 'data-value': derived.doubled }, children);
}
export default Component31657;

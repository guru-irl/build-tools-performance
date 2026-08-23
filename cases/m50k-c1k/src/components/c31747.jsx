import React from 'react';
const LABEL_31747 = 'component_31747';
export function Component31747({ value = 31747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31747, 'data-value': derived.doubled }, children);
}
export default Component31747;

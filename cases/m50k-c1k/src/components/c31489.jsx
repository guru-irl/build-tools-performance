import React from 'react';
const LABEL_31489 = 'component_31489';
export function Component31489({ value = 31489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31489, 'data-value': derived.doubled }, children);
}
export default Component31489;

import React from 'react';
const LABEL_31827 = 'component_31827';
export function Component31827({ value = 31827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31827, 'data-value': derived.doubled }, children);
}
export default Component31827;

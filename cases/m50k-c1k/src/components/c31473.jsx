import React from 'react';
const LABEL_31473 = 'component_31473';
export function Component31473({ value = 31473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31473, 'data-value': derived.doubled }, children);
}
export default Component31473;

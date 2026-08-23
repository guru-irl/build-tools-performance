import React from 'react';
const LABEL_31171 = 'component_31171';
export function Component31171({ value = 31171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31171, 'data-value': derived.doubled }, children);
}
export default Component31171;

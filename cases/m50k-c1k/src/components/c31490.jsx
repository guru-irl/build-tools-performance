import React from 'react';
const LABEL_31490 = 'component_31490';
export function Component31490({ value = 31490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31490, 'data-value': derived.doubled }, children);
}
export default Component31490;

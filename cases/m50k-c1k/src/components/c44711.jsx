import React from 'react';
const LABEL_44711 = 'component_44711';
export function Component44711({ value = 44711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44711, 'data-value': derived.doubled }, children);
}
export default Component44711;

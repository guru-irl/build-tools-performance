import React from 'react';
const LABEL_18711 = 'component_18711';
export function Component18711({ value = 18711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18711, 'data-value': derived.doubled }, children);
}
export default Component18711;

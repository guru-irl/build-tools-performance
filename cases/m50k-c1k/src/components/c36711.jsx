import React from 'react';
const LABEL_36711 = 'component_36711';
export function Component36711({ value = 36711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36711, 'data-value': derived.doubled }, children);
}
export default Component36711;

import React from 'react';
const LABEL_4711 = 'component_4711';
export function Component4711({ value = 4711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4711, 'data-value': derived.doubled }, children);
}
export default Component4711;

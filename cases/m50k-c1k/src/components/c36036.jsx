import React from 'react';
const LABEL_36036 = 'component_36036';
export function Component36036({ value = 36036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36036, 'data-value': derived.doubled }, children);
}
export default Component36036;

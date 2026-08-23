import React from 'react';
const LABEL_27711 = 'component_27711';
export function Component27711({ value = 27711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27711, 'data-value': derived.doubled }, children);
}
export default Component27711;

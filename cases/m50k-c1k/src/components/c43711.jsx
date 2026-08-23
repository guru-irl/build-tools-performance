import React from 'react';
const LABEL_43711 = 'component_43711';
export function Component43711({ value = 43711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43711, 'data-value': derived.doubled }, children);
}
export default Component43711;

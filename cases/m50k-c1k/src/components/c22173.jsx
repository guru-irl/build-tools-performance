import React from 'react';
const LABEL_22173 = 'component_22173';
export function Component22173({ value = 22173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22173, 'data-value': derived.doubled }, children);
}
export default Component22173;

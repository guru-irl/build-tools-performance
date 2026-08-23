import React from 'react';
const LABEL_22267 = 'component_22267';
export function Component22267({ value = 22267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22267, 'data-value': derived.doubled }, children);
}
export default Component22267;

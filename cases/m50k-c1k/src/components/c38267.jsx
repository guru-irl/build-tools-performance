import React from 'react';
const LABEL_38267 = 'component_38267';
export function Component38267({ value = 38267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38267, 'data-value': derived.doubled }, children);
}
export default Component38267;

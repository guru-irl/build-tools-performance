import React from 'react';
const LABEL_1267 = 'component_1267';
export function Component1267({ value = 1267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1267, 'data-value': derived.doubled }, children);
}
export default Component1267;

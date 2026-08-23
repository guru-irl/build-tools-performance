import React from 'react';
const LABEL_44267 = 'component_44267';
export function Component44267({ value = 44267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44267, 'data-value': derived.doubled }, children);
}
export default Component44267;

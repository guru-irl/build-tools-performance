import React from 'react';
const LABEL_46267 = 'component_46267';
export function Component46267({ value = 46267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46267, 'data-value': derived.doubled }, children);
}
export default Component46267;

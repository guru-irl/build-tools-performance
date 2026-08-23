import React from 'react';
const LABEL_21267 = 'component_21267';
export function Component21267({ value = 21267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21267, 'data-value': derived.doubled }, children);
}
export default Component21267;

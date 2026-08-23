import React from 'react';
const LABEL_3267 = 'component_3267';
export function Component3267({ value = 3267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3267, 'data-value': derived.doubled }, children);
}
export default Component3267;

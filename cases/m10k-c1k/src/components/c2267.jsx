import React from 'react';
const LABEL_2267 = 'component_2267';
export function Component2267({ value = 2267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2267, 'data-value': derived.doubled }, children);
}
export default Component2267;

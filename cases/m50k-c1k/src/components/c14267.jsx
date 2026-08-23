import React from 'react';
const LABEL_14267 = 'component_14267';
export function Component14267({ value = 14267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14267, 'data-value': derived.doubled }, children);
}
export default Component14267;

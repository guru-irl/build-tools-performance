import React from 'react';
const LABEL_4267 = 'component_4267';
export function Component4267({ value = 4267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4267, 'data-value': derived.doubled }, children);
}
export default Component4267;

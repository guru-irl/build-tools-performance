import React from 'react';
const LABEL_18267 = 'component_18267';
export function Component18267({ value = 18267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18267, 'data-value': derived.doubled }, children);
}
export default Component18267;

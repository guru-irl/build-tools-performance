import React from 'react';
const LABEL_16164 = 'component_16164';
export function Component16164({ value = 16164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16164, 'data-value': derived.doubled }, children);
}
export default Component16164;

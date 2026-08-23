import React from 'react';
const LABEL_24450 = 'component_24450';
export function Component24450({ value = 24450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24450, 'data-value': derived.doubled }, children);
}
export default Component24450;

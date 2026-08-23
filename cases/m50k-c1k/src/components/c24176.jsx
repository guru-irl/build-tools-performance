import React from 'react';
const LABEL_24176 = 'component_24176';
export function Component24176({ value = 24176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24176, 'data-value': derived.doubled }, children);
}
export default Component24176;

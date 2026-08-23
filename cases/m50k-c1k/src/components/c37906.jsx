import React from 'react';
const LABEL_37906 = 'component_37906';
export function Component37906({ value = 37906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37906, 'data-value': derived.doubled }, children);
}
export default Component37906;

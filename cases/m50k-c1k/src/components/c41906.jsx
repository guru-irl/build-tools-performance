import React from 'react';
const LABEL_41906 = 'component_41906';
export function Component41906({ value = 41906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41906, 'data-value': derived.doubled }, children);
}
export default Component41906;

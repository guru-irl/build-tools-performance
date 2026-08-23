import React from 'react';
const LABEL_16906 = 'component_16906';
export function Component16906({ value = 16906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16906, 'data-value': derived.doubled }, children);
}
export default Component16906;

import React from 'react';
const LABEL_15906 = 'component_15906';
export function Component15906({ value = 15906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15906, 'data-value': derived.doubled }, children);
}
export default Component15906;

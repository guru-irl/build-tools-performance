import React from 'react';
const LABEL_22906 = 'component_22906';
export function Component22906({ value = 22906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22906, 'data-value': derived.doubled }, children);
}
export default Component22906;

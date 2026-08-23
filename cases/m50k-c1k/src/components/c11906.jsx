import React from 'react';
const LABEL_11906 = 'component_11906';
export function Component11906({ value = 11906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11906, 'data-value': derived.doubled }, children);
}
export default Component11906;

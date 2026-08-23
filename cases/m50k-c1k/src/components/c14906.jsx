import React from 'react';
const LABEL_14906 = 'component_14906';
export function Component14906({ value = 14906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14906, 'data-value': derived.doubled }, children);
}
export default Component14906;

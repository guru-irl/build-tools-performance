import React from 'react';
const LABEL_17906 = 'component_17906';
export function Component17906({ value = 17906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17906, 'data-value': derived.doubled }, children);
}
export default Component17906;

import React from 'react';
const LABEL_36906 = 'component_36906';
export function Component36906({ value = 36906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36906, 'data-value': derived.doubled }, children);
}
export default Component36906;

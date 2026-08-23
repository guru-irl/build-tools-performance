import React from 'react';
const LABEL_40906 = 'component_40906';
export function Component40906({ value = 40906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40906, 'data-value': derived.doubled }, children);
}
export default Component40906;

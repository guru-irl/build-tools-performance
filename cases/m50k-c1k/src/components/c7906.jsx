import React from 'react';
const LABEL_7906 = 'component_7906';
export function Component7906({ value = 7906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7906, 'data-value': derived.doubled }, children);
}
export default Component7906;

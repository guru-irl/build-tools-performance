import React from 'react';
const LABEL_45906 = 'component_45906';
export function Component45906({ value = 45906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45906, 'data-value': derived.doubled }, children);
}
export default Component45906;

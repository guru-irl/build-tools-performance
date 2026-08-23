import React from 'react';
const LABEL_4906 = 'component_4906';
export function Component4906({ value = 4906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4906, 'data-value': derived.doubled }, children);
}
export default Component4906;

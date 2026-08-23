import React from 'react';
const LABEL_6906 = 'component_6906';
export function Component6906({ value = 6906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6906, 'data-value': derived.doubled }, children);
}
export default Component6906;

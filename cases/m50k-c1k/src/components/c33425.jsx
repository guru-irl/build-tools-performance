import React from 'react';
const LABEL_33425 = 'component_33425';
export function Component33425({ value = 33425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33425, 'data-value': derived.doubled }, children);
}
export default Component33425;

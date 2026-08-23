import React from 'react';
const LABEL_7265 = 'component_7265';
export function Component7265({ value = 7265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7265, 'data-value': derived.doubled }, children);
}
export default Component7265;

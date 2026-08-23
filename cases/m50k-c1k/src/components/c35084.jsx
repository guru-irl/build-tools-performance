import React from 'react';
const LABEL_35084 = 'component_35084';
export function Component35084({ value = 35084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35084, 'data-value': derived.doubled }, children);
}
export default Component35084;

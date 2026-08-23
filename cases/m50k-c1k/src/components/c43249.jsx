import React from 'react';
const LABEL_43249 = 'component_43249';
export function Component43249({ value = 43249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43249, 'data-value': derived.doubled }, children);
}
export default Component43249;

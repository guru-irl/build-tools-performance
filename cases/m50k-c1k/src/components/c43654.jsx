import React from 'react';
const LABEL_43654 = 'component_43654';
export function Component43654({ value = 43654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43654, 'data-value': derived.doubled }, children);
}
export default Component43654;

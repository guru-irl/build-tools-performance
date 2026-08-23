import React from 'react';
const LABEL_43338 = 'component_43338';
export function Component43338({ value = 43338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43338, 'data-value': derived.doubled }, children);
}
export default Component43338;

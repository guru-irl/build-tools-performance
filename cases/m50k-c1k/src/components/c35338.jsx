import React from 'react';
const LABEL_35338 = 'component_35338';
export function Component35338({ value = 35338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35338, 'data-value': derived.doubled }, children);
}
export default Component35338;

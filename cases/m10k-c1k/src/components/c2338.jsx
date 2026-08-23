import React from 'react';
const LABEL_2338 = 'component_2338';
export function Component2338({ value = 2338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2338, 'data-value': derived.doubled }, children);
}
export default Component2338;

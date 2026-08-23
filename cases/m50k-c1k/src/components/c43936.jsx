import React from 'react';
const LABEL_43936 = 'component_43936';
export function Component43936({ value = 43936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43936, 'data-value': derived.doubled }, children);
}
export default Component43936;

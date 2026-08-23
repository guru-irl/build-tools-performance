import React from 'react';
const LABEL_19338 = 'component_19338';
export function Component19338({ value = 19338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19338, 'data-value': derived.doubled }, children);
}
export default Component19338;

import React from 'react';
const LABEL_34478 = 'component_34478';
export function Component34478({ value = 34478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34478, 'data-value': derived.doubled }, children);
}
export default Component34478;

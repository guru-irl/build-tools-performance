import React from 'react';
const LABEL_19349 = 'component_19349';
export function Component19349({ value = 19349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19349, 'data-value': derived.doubled }, children);
}
export default Component19349;

import React from 'react';
const LABEL_38460 = 'component_38460';
export function Component38460({ value = 38460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38460, 'data-value': derived.doubled }, children);
}
export default Component38460;

import React from 'react';
const LABEL_25566 = 'component_25566';
export function Component25566({ value = 25566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25566, 'data-value': derived.doubled }, children);
}
export default Component25566;

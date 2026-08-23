import React from 'react';
const LABEL_25176 = 'component_25176';
export function Component25176({ value = 25176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25176, 'data-value': derived.doubled }, children);
}
export default Component25176;

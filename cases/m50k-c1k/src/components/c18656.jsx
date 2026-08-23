import React from 'react';
const LABEL_18656 = 'component_18656';
export function Component18656({ value = 18656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18656, 'data-value': derived.doubled }, children);
}
export default Component18656;

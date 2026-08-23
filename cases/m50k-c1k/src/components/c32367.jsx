import React from 'react';
const LABEL_32367 = 'component_32367';
export function Component32367({ value = 32367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32367, 'data-value': derived.doubled }, children);
}
export default Component32367;

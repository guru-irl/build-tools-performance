import React from 'react';
const LABEL_15367 = 'component_15367';
export function Component15367({ value = 15367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15367, 'data-value': derived.doubled }, children);
}
export default Component15367;

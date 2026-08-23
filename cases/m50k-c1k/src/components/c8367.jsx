import React from 'react';
const LABEL_8367 = 'component_8367';
export function Component8367({ value = 8367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8367, 'data-value': derived.doubled }, children);
}
export default Component8367;

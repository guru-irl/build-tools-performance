import React from 'react';
const LABEL_15090 = 'component_15090';
export function Component15090({ value = 15090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15090, 'data-value': derived.doubled }, children);
}
export default Component15090;

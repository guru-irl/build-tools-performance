import React from 'react';
const LABEL_26044 = 'component_26044';
export function Component26044({ value = 26044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26044, 'data-value': derived.doubled }, children);
}
export default Component26044;

import React from 'react';
const LABEL_7044 = 'component_7044';
export function Component7044({ value = 7044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7044, 'data-value': derived.doubled }, children);
}
export default Component7044;

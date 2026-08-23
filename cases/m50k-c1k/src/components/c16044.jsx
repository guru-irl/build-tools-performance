import React from 'react';
const LABEL_16044 = 'component_16044';
export function Component16044({ value = 16044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16044, 'data-value': derived.doubled }, children);
}
export default Component16044;

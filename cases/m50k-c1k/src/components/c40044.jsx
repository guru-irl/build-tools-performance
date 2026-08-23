import React from 'react';
const LABEL_40044 = 'component_40044';
export function Component40044({ value = 40044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40044, 'data-value': derived.doubled }, children);
}
export default Component40044;

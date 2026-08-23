import React from 'react';
const LABEL_42044 = 'component_42044';
export function Component42044({ value = 42044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42044, 'data-value': derived.doubled }, children);
}
export default Component42044;

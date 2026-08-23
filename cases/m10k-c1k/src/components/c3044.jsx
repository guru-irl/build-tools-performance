import React from 'react';
const LABEL_3044 = 'component_3044';
export function Component3044({ value = 3044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3044, 'data-value': derived.doubled }, children);
}
export default Component3044;

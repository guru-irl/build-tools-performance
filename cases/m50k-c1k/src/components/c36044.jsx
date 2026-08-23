import React from 'react';
const LABEL_36044 = 'component_36044';
export function Component36044({ value = 36044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36044, 'data-value': derived.doubled }, children);
}
export default Component36044;

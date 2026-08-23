import React from 'react';
const LABEL_1044 = 'component_1044';
export function Component1044({ value = 1044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1044, 'data-value': derived.doubled }, children);
}
export default Component1044;

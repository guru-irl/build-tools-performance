import React from 'react';
const LABEL_22522 = 'component_22522';
export function Component22522({ value = 22522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22522, 'data-value': derived.doubled }, children);
}
export default Component22522;

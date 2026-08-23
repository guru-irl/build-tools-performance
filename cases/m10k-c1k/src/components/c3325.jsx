import React from 'react';
const LABEL_3325 = 'component_3325';
export function Component3325({ value = 3325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3325, 'data-value': derived.doubled }, children);
}
export default Component3325;

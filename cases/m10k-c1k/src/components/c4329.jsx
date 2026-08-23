import React from 'react';
const LABEL_4329 = 'component_4329';
export function Component4329({ value = 4329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4329, 'data-value': derived.doubled }, children);
}
export default Component4329;

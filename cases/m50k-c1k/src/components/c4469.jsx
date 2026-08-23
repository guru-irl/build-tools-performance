import React from 'react';
const LABEL_4469 = 'component_4469';
export function Component4469({ value = 4469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4469, 'data-value': derived.doubled }, children);
}
export default Component4469;

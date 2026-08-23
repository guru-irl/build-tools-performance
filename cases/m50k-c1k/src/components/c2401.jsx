import React from 'react';
const LABEL_2401 = 'component_2401';
export function Component2401({ value = 2401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2401, 'data-value': derived.doubled }, children);
}
export default Component2401;

import React from 'react';
const LABEL_3425 = 'component_3425';
export function Component3425({ value = 3425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3425, 'data-value': derived.doubled }, children);
}
export default Component3425;

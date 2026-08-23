import React from 'react';
const LABEL_18213 = 'component_18213';
export function Component18213({ value = 18213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18213, 'data-value': derived.doubled }, children);
}
export default Component18213;

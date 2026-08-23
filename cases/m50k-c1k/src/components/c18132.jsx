import React from 'react';
const LABEL_18132 = 'component_18132';
export function Component18132({ value = 18132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18132, 'data-value': derived.doubled }, children);
}
export default Component18132;

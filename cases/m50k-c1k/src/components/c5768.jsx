import React from 'react';
const LABEL_5768 = 'component_5768';
export function Component5768({ value = 5768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5768, 'data-value': derived.doubled }, children);
}
export default Component5768;

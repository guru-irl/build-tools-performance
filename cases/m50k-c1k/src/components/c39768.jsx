import React from 'react';
const LABEL_39768 = 'component_39768';
export function Component39768({ value = 39768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39768, 'data-value': derived.doubled }, children);
}
export default Component39768;

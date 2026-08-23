import React from 'react';
const LABEL_44768 = 'component_44768';
export function Component44768({ value = 44768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44768, 'data-value': derived.doubled }, children);
}
export default Component44768;

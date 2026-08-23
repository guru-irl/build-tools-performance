import React from 'react';
const LABEL_6768 = 'component_6768';
export function Component6768({ value = 6768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6768, 'data-value': derived.doubled }, children);
}
export default Component6768;

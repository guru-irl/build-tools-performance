import React from 'react';
const LABEL_31696 = 'component_31696';
export function Component31696({ value = 31696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31696, 'data-value': derived.doubled }, children);
}
export default Component31696;

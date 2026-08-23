import React from 'react';
const LABEL_31468 = 'component_31468';
export function Component31468({ value = 31468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31468, 'data-value': derived.doubled }, children);
}
export default Component31468;

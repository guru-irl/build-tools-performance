import React from 'react';
const LABEL_24497 = 'component_24497';
export function Component24497({ value = 24497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24497, 'data-value': derived.doubled }, children);
}
export default Component24497;

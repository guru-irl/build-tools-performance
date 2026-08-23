import React from 'react';
const LABEL_31713 = 'component_31713';
export function Component31713({ value = 31713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31713, 'data-value': derived.doubled }, children);
}
export default Component31713;

import React from 'react';
const LABEL_31834 = 'component_31834';
export function Component31834({ value = 31834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31834, 'data-value': derived.doubled }, children);
}
export default Component31834;

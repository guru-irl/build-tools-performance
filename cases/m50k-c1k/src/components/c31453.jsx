import React from 'react';
const LABEL_31453 = 'component_31453';
export function Component31453({ value = 31453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31453, 'data-value': derived.doubled }, children);
}
export default Component31453;

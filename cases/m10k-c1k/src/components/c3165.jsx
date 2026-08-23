import React from 'react';
const LABEL_3165 = 'component_3165';
export function Component3165({ value = 3165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3165, 'data-value': derived.doubled }, children);
}
export default Component3165;

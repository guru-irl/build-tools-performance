import React from 'react';
const LABEL_31183 = 'component_31183';
export function Component31183({ value = 31183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31183, 'data-value': derived.doubled }, children);
}
export default Component31183;

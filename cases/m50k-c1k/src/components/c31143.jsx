import React from 'react';
const LABEL_31143 = 'component_31143';
export function Component31143({ value = 31143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31143, 'data-value': derived.doubled }, children);
}
export default Component31143;

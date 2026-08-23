import React from 'react';
const LABEL_31334 = 'component_31334';
export function Component31334({ value = 31334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31334, 'data-value': derived.doubled }, children);
}
export default Component31334;

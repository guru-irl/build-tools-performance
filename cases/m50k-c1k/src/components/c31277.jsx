import React from 'react';
const LABEL_31277 = 'component_31277';
export function Component31277({ value = 31277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31277, 'data-value': derived.doubled }, children);
}
export default Component31277;

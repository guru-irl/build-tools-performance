import React from 'react';
const LABEL_31347 = 'component_31347';
export function Component31347({ value = 31347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31347, 'data-value': derived.doubled }, children);
}
export default Component31347;

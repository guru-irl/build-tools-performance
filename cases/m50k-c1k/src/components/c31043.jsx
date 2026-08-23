import React from 'react';
const LABEL_31043 = 'component_31043';
export function Component31043({ value = 31043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31043, 'data-value': derived.doubled }, children);
}
export default Component31043;

import React from 'react';
const LABEL_31760 = 'component_31760';
export function Component31760({ value = 31760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31760, 'data-value': derived.doubled }, children);
}
export default Component31760;

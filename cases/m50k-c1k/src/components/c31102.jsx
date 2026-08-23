import React from 'react';
const LABEL_31102 = 'component_31102';
export function Component31102({ value = 31102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31102, 'data-value': derived.doubled }, children);
}
export default Component31102;

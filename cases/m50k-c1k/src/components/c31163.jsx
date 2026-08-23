import React from 'react';
const LABEL_31163 = 'component_31163';
export function Component31163({ value = 31163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31163, 'data-value': derived.doubled }, children);
}
export default Component31163;

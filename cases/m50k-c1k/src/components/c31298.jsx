import React from 'react';
const LABEL_31298 = 'component_31298';
export function Component31298({ value = 31298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31298, 'data-value': derived.doubled }, children);
}
export default Component31298;

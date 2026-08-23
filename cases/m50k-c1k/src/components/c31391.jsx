import React from 'react';
const LABEL_31391 = 'component_31391';
export function Component31391({ value = 31391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31391, 'data-value': derived.doubled }, children);
}
export default Component31391;

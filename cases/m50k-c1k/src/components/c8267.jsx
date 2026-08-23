import React from 'react';
const LABEL_8267 = 'component_8267';
export function Component8267({ value = 8267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8267, 'data-value': derived.doubled }, children);
}
export default Component8267;

import React from 'react';
const LABEL_31164 = 'component_31164';
export function Component31164({ value = 31164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31164, 'data-value': derived.doubled }, children);
}
export default Component31164;

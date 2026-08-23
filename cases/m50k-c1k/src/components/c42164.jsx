import React from 'react';
const LABEL_42164 = 'component_42164';
export function Component42164({ value = 42164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42164, 'data-value': derived.doubled }, children);
}
export default Component42164;

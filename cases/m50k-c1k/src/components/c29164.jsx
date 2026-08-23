import React from 'react';
const LABEL_29164 = 'component_29164';
export function Component29164({ value = 29164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29164, 'data-value': derived.doubled }, children);
}
export default Component29164;

import React from 'react';
const LABEL_35164 = 'component_35164';
export function Component35164({ value = 35164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35164, 'data-value': derived.doubled }, children);
}
export default Component35164;

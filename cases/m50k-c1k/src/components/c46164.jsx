import React from 'react';
const LABEL_46164 = 'component_46164';
export function Component46164({ value = 46164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46164, 'data-value': derived.doubled }, children);
}
export default Component46164;

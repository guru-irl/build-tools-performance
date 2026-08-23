import React from 'react';
const LABEL_37164 = 'component_37164';
export function Component37164({ value = 37164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37164, 'data-value': derived.doubled }, children);
}
export default Component37164;

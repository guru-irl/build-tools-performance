import React from 'react';
const LABEL_3164 = 'component_3164';
export function Component3164({ value = 3164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3164, 'data-value': derived.doubled }, children);
}
export default Component3164;

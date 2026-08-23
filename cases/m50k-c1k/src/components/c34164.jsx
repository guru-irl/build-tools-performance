import React from 'react';
const LABEL_34164 = 'component_34164';
export function Component34164({ value = 34164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34164, 'data-value': derived.doubled }, children);
}
export default Component34164;

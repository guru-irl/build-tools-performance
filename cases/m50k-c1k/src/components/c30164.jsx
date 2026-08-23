import React from 'react';
const LABEL_30164 = 'component_30164';
export function Component30164({ value = 30164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30164, 'data-value': derived.doubled }, children);
}
export default Component30164;

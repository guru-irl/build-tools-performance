import React from 'react';
const LABEL_14164 = 'component_14164';
export function Component14164({ value = 14164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14164, 'data-value': derived.doubled }, children);
}
export default Component14164;

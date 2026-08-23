import React from 'react';
const LABEL_12164 = 'component_12164';
export function Component12164({ value = 12164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12164, 'data-value': derived.doubled }, children);
}
export default Component12164;

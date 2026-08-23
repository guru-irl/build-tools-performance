import React from 'react';
const LABEL_10164 = 'component_10164';
export function Component10164({ value = 10164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10164, 'data-value': derived.doubled }, children);
}
export default Component10164;

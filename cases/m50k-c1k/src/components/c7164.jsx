import React from 'react';
const LABEL_7164 = 'component_7164';
export function Component7164({ value = 7164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7164, 'data-value': derived.doubled }, children);
}
export default Component7164;

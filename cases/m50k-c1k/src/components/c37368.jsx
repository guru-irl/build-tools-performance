import React from 'react';
const LABEL_37368 = 'component_37368';
export function Component37368({ value = 37368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37368, 'data-value': derived.doubled }, children);
}
export default Component37368;

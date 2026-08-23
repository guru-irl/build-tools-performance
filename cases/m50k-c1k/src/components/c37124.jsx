import React from 'react';
const LABEL_37124 = 'component_37124';
export function Component37124({ value = 37124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37124, 'data-value': derived.doubled }, children);
}
export default Component37124;

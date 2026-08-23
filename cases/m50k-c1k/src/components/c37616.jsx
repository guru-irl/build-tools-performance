import React from 'react';
const LABEL_37616 = 'component_37616';
export function Component37616({ value = 37616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37616, 'data-value': derived.doubled }, children);
}
export default Component37616;

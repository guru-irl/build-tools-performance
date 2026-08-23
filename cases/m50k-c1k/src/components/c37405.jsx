import React from 'react';
const LABEL_37405 = 'component_37405';
export function Component37405({ value = 37405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37405, 'data-value': derived.doubled }, children);
}
export default Component37405;

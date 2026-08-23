import React from 'react';
const LABEL_37525 = 'component_37525';
export function Component37525({ value = 37525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37525, 'data-value': derived.doubled }, children);
}
export default Component37525;

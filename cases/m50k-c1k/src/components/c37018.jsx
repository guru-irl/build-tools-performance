import React from 'react';
const LABEL_37018 = 'component_37018';
export function Component37018({ value = 37018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37018, 'data-value': derived.doubled }, children);
}
export default Component37018;

import React from 'react';
const LABEL_37274 = 'component_37274';
export function Component37274({ value = 37274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37274, 'data-value': derived.doubled }, children);
}
export default Component37274;

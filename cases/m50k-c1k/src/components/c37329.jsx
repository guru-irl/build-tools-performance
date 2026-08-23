import React from 'react';
const LABEL_37329 = 'component_37329';
export function Component37329({ value = 37329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37329, 'data-value': derived.doubled }, children);
}
export default Component37329;

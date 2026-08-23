import React from 'react';
const LABEL_37096 = 'component_37096';
export function Component37096({ value = 37096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37096, 'data-value': derived.doubled }, children);
}
export default Component37096;

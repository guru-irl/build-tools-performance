import React from 'react';
const LABEL_8096 = 'component_8096';
export function Component8096({ value = 8096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8096, 'data-value': derived.doubled }, children);
}
export default Component8096;

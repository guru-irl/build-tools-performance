import React from 'react';
const LABEL_3331 = 'component_3331';
export function Component3331({ value = 3331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3331, 'data-value': derived.doubled }, children);
}
export default Component3331;

import React from 'react';
const LABEL_19512 = 'component_19512';
export function Component19512({ value = 19512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19512, 'data-value': derived.doubled }, children);
}
export default Component19512;

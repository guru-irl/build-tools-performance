import React from 'react';
const LABEL_40193 = 'component_40193';
export function Component40193({ value = 40193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40193, 'data-value': derived.doubled }, children);
}
export default Component40193;

import React from 'react';
const LABEL_37790 = 'component_37790';
export function Component37790({ value = 37790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37790, 'data-value': derived.doubled }, children);
}
export default Component37790;

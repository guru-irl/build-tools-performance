import React from 'react';
const LABEL_37176 = 'component_37176';
export function Component37176({ value = 37176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37176, 'data-value': derived.doubled }, children);
}
export default Component37176;

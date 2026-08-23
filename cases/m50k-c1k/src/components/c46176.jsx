import React from 'react';
const LABEL_46176 = 'component_46176';
export function Component46176({ value = 46176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46176, 'data-value': derived.doubled }, children);
}
export default Component46176;

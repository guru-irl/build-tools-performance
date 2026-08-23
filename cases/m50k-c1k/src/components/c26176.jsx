import React from 'react';
const LABEL_26176 = 'component_26176';
export function Component26176({ value = 26176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26176, 'data-value': derived.doubled }, children);
}
export default Component26176;

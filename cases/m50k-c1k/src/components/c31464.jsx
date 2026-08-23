import React from 'react';
const LABEL_31464 = 'component_31464';
export function Component31464({ value = 31464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31464, 'data-value': derived.doubled }, children);
}
export default Component31464;

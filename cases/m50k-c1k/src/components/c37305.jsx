import React from 'react';
const LABEL_37305 = 'component_37305';
export function Component37305({ value = 37305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37305, 'data-value': derived.doubled }, children);
}
export default Component37305;

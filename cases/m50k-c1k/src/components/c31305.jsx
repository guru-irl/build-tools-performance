import React from 'react';
const LABEL_31305 = 'component_31305';
export function Component31305({ value = 31305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31305, 'data-value': derived.doubled }, children);
}
export default Component31305;

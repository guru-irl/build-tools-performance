import React from 'react';
const LABEL_3305 = 'component_3305';
export function Component3305({ value = 3305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3305, 'data-value': derived.doubled }, children);
}
export default Component3305;

import React from 'react';
const LABEL_6591 = 'component_6591';
export function Component6591({ value = 6591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6591, 'data-value': derived.doubled }, children);
}
export default Component6591;

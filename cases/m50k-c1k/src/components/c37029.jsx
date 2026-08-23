import React from 'react';
const LABEL_37029 = 'component_37029';
export function Component37029({ value = 37029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37029, 'data-value': derived.doubled }, children);
}
export default Component37029;

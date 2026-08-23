import React from 'react';
const LABEL_13029 = 'component_13029';
export function Component13029({ value = 13029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13029, 'data-value': derived.doubled }, children);
}
export default Component13029;

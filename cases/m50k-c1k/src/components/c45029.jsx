import React from 'react';
const LABEL_45029 = 'component_45029';
export function Component45029({ value = 45029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45029, 'data-value': derived.doubled }, children);
}
export default Component45029;

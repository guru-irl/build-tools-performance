import React from 'react';
const LABEL_33486 = 'component_33486';
export function Component33486({ value = 33486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33486, 'data-value': derived.doubled }, children);
}
export default Component33486;

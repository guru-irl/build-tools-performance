import React from 'react';
const LABEL_2812 = 'component_2812';
export function Component2812({ value = 2812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2812, 'data-value': derived.doubled }, children);
}
export default Component2812;

import React from 'react';
const LABEL_20620 = 'component_20620';
export function Component20620({ value = 20620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20620, 'data-value': derived.doubled }, children);
}
export default Component20620;

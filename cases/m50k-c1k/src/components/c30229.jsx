import React from 'react';
const LABEL_30229 = 'component_30229';
export function Component30229({ value = 30229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30229, 'data-value': derived.doubled }, children);
}
export default Component30229;

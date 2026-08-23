import React from 'react';
const LABEL_44760 = 'component_44760';
export function Component44760({ value = 44760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44760, 'data-value': derived.doubled }, children);
}
export default Component44760;

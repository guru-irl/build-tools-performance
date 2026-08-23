import React from 'react';
const LABEL_25157 = 'component_25157';
export function Component25157({ value = 25157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25157, 'data-value': derived.doubled }, children);
}
export default Component25157;

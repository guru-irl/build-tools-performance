import React from 'react';
const LABEL_11386 = 'component_11386';
export function Component11386({ value = 11386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11386, 'data-value': derived.doubled }, children);
}
export default Component11386;

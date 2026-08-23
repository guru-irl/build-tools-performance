import React from 'react';
const LABEL_3914 = 'component_3914';
export function Component3914({ value = 3914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3914, 'data-value': derived.doubled }, children);
}
export default Component3914;

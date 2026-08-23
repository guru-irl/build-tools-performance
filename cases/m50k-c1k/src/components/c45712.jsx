import React from 'react';
const LABEL_45712 = 'component_45712';
export function Component45712({ value = 45712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45712, 'data-value': derived.doubled }, children);
}
export default Component45712;

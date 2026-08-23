import React from 'react';
const LABEL_40045 = 'component_40045';
export function Component40045({ value = 40045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40045, 'data-value': derived.doubled }, children);
}
export default Component40045;
